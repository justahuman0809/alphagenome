# grok-bot

Grok-style chat assistant on `grok-4.5` (high effort, fast). Playground + HTTP
only for the first cut. One server tool: `now` (UTC clock).

## Run

```bash
cd grok-bot
npx @cursor/bdk login          # or set CURSOR_API_KEY
npx @cursor/bdk validate
npx @cursor/bdk run --message "What time is it UTC?"
npx @cursor/bdk serve --mode single --dev
# http://127.0.0.1:3000/playground
```

## Layout

- `bot/instructions.md` — Grok personality and tool guidance
- `bot/tools/now.ts` — current UTC time
- `bot/hooks/memory.ts` — session journal
- `evals/smoke.eval.ts` — first-turn smoke case
