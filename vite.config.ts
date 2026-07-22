import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { readFile } from 'node:fs/promises'

const MAX_MESSAGE_LENGTH = 1_000

function sendJson(response: import('node:http').ServerResponse, status: number, data: object) {
  response.statusCode = status
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(data))
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'local-chat-api',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (request, response) => {
            if (request.method !== 'POST') {
              response.setHeader('Allow', 'POST')
              sendJson(response, 405, { error: 'Method not allowed.' })
              return
            }

            try {
              let requestBody = ''
              for await (const chunk of request) requestBody += chunk
              const { message } = JSON.parse(requestBody) as { message?: unknown }

              if (typeof message !== 'string' || !message.trim()) {
                sendJson(response, 400, { error: 'A message is required.' })
                return
              }

              if (message.length > MAX_MESSAGE_LENGTH) {
                sendJson(response, 400, { error: 'Please keep messages under 1,000 characters.' })
                return
              }

              if (!env.GROQ_API_KEY) {
                sendJson(response, 500, { error: 'Chat service is not configured. Add GROQ_API_KEY to .env.' })
                return
              }

              const [systemPrompt, profile] = await Promise.all([
                readFile('src/data/system_prompt.txt', 'utf8'),
                readFile('src/data/informtion.txt', 'utf8'),
              ])
              const groqResponse = await fetch('https://api.groq.com/openai/v1/responses', {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${env.GROQ_API_KEY}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  model: 'openai/gpt-oss-20b',
                  instructions: `${systemPrompt}\n\nRetrieved context:\n${profile}`,
                  input: message.trim(),
                  max_output_tokens: 350,
                }),
              })
              const result = await groqResponse.json() as {
                output_text?: string
                output?: Array<{ content?: Array<{ type: string; text: string }> }>
              }

              if (!groqResponse.ok) {
                console.error('Groq response error:', result)
                sendJson(response, 502, { error: 'The chat service is temporarily unavailable.' })
                return
              }

              const reply = result.output_text?.trim() ?? result.output
                ?.flatMap((item: { content?: Array<{ type: string; text: string }> }) => item.content ?? [])
                .filter((content: { type: string }) => content.type === 'output_text')
                .map((content: { text: string }) => content.text)
                .join('')
                .trim()

              sendJson(response, reply ? 200 : 502, reply
                ? { reply }
                : { error: 'The chat service returned an empty response.' })
            } catch (error) {
              console.error('Local chat endpoint error:', error)
              sendJson(response, 500, { error: 'Unable to reach the chat service.' })
            }
          })
        },
      },
    ],
  }
})
