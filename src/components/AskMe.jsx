import { useState, useRef, useEffect } from "react"

const SUGGESTIONS = [
  "What did he build at Credit Karma?",
  "What's his strongest language?",
  "Tell me about the Coinbase work",
]

const AskMe = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, loading])

  const send = async (text) => {
    const content = (text ?? input).trim()
    if (!content || loading) return

    const next = [...messages, { role: "user", content }]
    setMessages(next)
    setInput("")
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong.")
      } else {
        setMessages((m) => [...m, { role: "assistant", content: data.reply }])
      }
    } catch {
      setError("Couldn't reach the server. Check your connection.")
    } finally {
      setLoading(false)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  if (!open) {
    return (
      <button className="askme-fab" onClick={() => setOpen(true)}>
        Ask about Aryan
      </button>
    )
  }

  return (
    <div className="askme-panel" role="dialog" aria-label="Ask about Aryan">
      <div className="askme-head">
        <span className="askme-title">Ask about Aryan</span>
        <button className="askme-close" onClick={() => setOpen(false)} aria-label="Close">
          ×
        </button>
      </div>

      <div className="askme-body" ref={bodyRef}>
        {messages.length === 0 && (
          <>
            <p className="askme-hint">
              Ask anything about my work, projects, or background.
            </p>
            <div className="askme-suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="askme-chip" onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          </>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`askme-msg askme-${m.role}`}>
            {m.content}
          </div>
        ))}

        {loading && <div className="askme-msg askme-assistant askme-typing">thinking…</div>}
        {error && <div className="askme-error">{error}</div>}
      </div>

      <div className="askme-input-row">
        <textarea
          className="askme-input"
          rows={1}
          value={input}
          placeholder="Type a question…"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button
          className="askme-send"
          onClick={() => send()}
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default AskMe
