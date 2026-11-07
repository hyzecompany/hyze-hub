# API de leads — api.hyzecompany.com.br (`apps/api`)

Parte do monorepo Hyze. **Leia primeiro o [CLAUDE.md da raiz](../../CLAUDE.md)** (protocolo de trabalho
em dupla, stack, identidade visual, animações, como rodar e publicar).

Recebe os formulários de todos os sites (`POST /v1/leads`), valida com Zod, confere o Turnstile
no servidor, grava no D1 (Drizzle) e avisa no Telegram (opcional). CORS liberado só para
`*.hyzecompany.com.br` (e `localhost` em dev).

Comandos (dentro de `apps/api`, ou na raiz com `pnpm --filter @hyze/api <script>`):

```bash
pnpm dev           # http://localhost:8787 — cria o .dev.vars e aplica as migrações locais sozinho
pnpm test
pnpm db:generate   # nova migração após mudar src/db/schema.ts
pnpm exec wrangler d1 execute hyze-leads --local --command "SELECT * FROM leads"
```

Mudança no schema = nova migração gerada (nunca edite migrações já aplicadas). Segredos só via
`wrangler secret put`.

Ao terminar: `pnpm verify` na raiz, entrada no topo de [docs/HANDOFF.md](../../docs/HANDOFF.md), commit e push.
