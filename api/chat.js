import { readFile } from 'node:fs/promises';

const MAX_MESSAGE_LENGTH = 1_000;

function getOutputText(response) {
  if (typeof response.output_text === 'string' && response.output_text.trim()) {
    return response.output_text.trim();
  }

  return response.output
    ?.flatMap((item) => item.content ?? [])
    .filter((content) => content.type === 'output_text')
    .map((content) => content.text)
    .join('')
    .trim();
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const message = request.body?.message;

  if (typeof message !== 'string' || !message.trim()) {
    return response.status(400).json({ error: 'A message is required.' });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return response.status(400).json({ error: 'Please keep messages under 1,000 characters.' });
  }

  if (!process.env.GROQ_API_KEY) {
    return response.status(500).json({ error: 'Chat service is not configured.' });
  }

  try {
    const [systemPrompt, profile] = await Promise.all([
      readFile(new URL('../src/data/system_prompt.txt', import.meta.url), 'utf8'),
      readFile(new URL('../src/data/informtion.txt', import.meta.url), 'utf8'),
    ]);

    const groqResponse = await fetch('https://api.groq.com/openai/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        instructions: `${systemPrompt}\n\nRetrieved context:\n${profile}`,
        input: message.trim(),
        max_output_tokens: 350,
      }),
    });

    const result = await groqResponse.json();

    if (!groqResponse.ok) {
      console.error('Groq response error:', result);
      return response.status(502).json({ error: 'The chat service is temporarily unavailable.' });
    }

    const reply = getOutputText(result);

    if (!reply) {
      return response.status(502).json({ error: 'The chat service returned an empty response.' });
    }

    return response.status(200).json({ reply });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    return response.status(500).json({ error: 'Unable to reach the chat service.' });
  }
}
