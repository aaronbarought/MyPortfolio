# Aryan Barot — Portfolio

Personal portfolio site built with React, Vite, and Tailwind CSS. Journal-themed design with a lined paper aesthetic.

**Live:** [my-portfolio-eosin-eta-66.vercel.app](https://my-portfolio-eosin-eta-66.vercel.app)

## Stack

- React 18 + React Router
- Vite
- Tailwind CSS
- Deployed on Vercel

## Pages

- **Work** — experience at Intuit Credit Karma, Coinbase, ContextQA, and ASU
- **Projects** — personal and academic projects
- **Education** — ASU B.S. Computer Science, CodePath

## Running locally

```bash
yarn install
yarn dev
```

## Adding company logos

Drop PNG files into `public/logos/` with these names and they'll load automatically:

| File | Company |
|---|---|
| `creditkarma.png` | Intuit Credit Karma |
| `coinbase.png` | Coinbase |
| `asu.png` | Arizona State University |
| `contextqa.png` | ContextQA |
| `slack.png` | Slack |
| `aws.png` | AWS |
| `firebase.png` | Firebase |
| `python.png` | Python |
| `swift.png` | Swift |
| `dotnet.png` | .NET |

## Dark mode

Toggle in the top-right corner. Preference is saved to `localStorage` and falls
back to the OS `prefers-color-scheme` setting on first visit.

## "Ask about Aryan" chat

A serverless function at `api/chat.js` proxies questions to the Anthropic API.
The API key stays server-side and is never shipped to the browser.

**Setup:**

1. Get a key at [console.anthropic.com](https://console.anthropic.com)
2. In Vercel: Project → Settings → Environment Variables
3. Add `ANTHROPIC_API_KEY` with your key, for all environments
4. Redeploy

Without the env var the widget returns a "not configured yet" message; the rest
of the site is unaffected.

The assistant answers only from the profile in `api/chat.js` — update that `BIO`
constant when your experience changes. It runs on Claude Haiku, capped at 400
output tokens with the last 8 messages of history.
