import { useState } from 'react';
import { HiOutlineChatBubbleLeftRight, HiXMark } from 'react-icons/hi2';
import './Chatbot.css';

type ChatMessage = {
  role: 'assistant' | 'user';
  text: string;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', text: 'Hi! Ask me about Elton John, his work, skills, or projects.' },
  ]);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  async function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = message.trim();

    if (!question || sending) return;

    setMessages((current) => [...current, { role: 'user', text: question }]);
    setMessage('');
    setSending(true);

    try {
      const chatResponse = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
      });
      const result = await chatResponse.json().catch(() => null) as { reply?: string; error?: string } | null;

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          text: chatResponse.ok && result?.reply
            ? result.reply
            : result?.error ?? 'The chat service is unavailable. Please try again.',
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { role: 'assistant', text: 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <aside className="chatbot" aria-label="Chat assistant">
      {open ? (
        <section className="chatbot__panel" aria-label="Dark Glitch's Chatbot assistant">
          <div className="chatbot__header">
            <div>
              <p className="chatbot__eyebrow">Dark Glitch's assistant</p>
              <p className="chatbot__subtitle">Ask about his profile or projects.</p>
            </div>
          <button
            type="button"
            className="chatbot__close"
            onClick={() => setOpen(false)}
            aria-label="Close chat assistant"
          >
            <HiXMark aria-hidden="true" />
          </button>
          </div>

          <div className="chatbot__messages" aria-live="polite">
            {messages.map((chatMessage, index) => (
              <p key={`${chatMessage.role}-${index}`} className={`chatbot__message chatbot__message--${chatMessage.role}`}>
                {chatMessage.text}
              </p>
            ))}
            {sending ? <p className="chatbot__typing">Thinking…</p> : null}
          </div>

          <form className="chatbot__form" onSubmit={sendMessage}>
            <label className="chatbot__label" htmlFor="chatbot-message">Ask a question</label>
            <div className="chatbot__input-row">
              <input
                id="chatbot-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={1000}
                placeholder="Ask about Elton John..."
                disabled={sending}
              />
              <button type="submit" disabled={sending || !message.trim()}>Send</button>
            </div>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        className="chatbot__launcher"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        title={open ? 'Close chat assistant' : 'Chat with me'}
      >
        {open ? <HiXMark aria-hidden="true" /> : <HiOutlineChatBubbleLeftRight aria-hidden="true" />}
      </button>
    </aside>
  );
}
