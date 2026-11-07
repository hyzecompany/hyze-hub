# Hyze — Muito além do código

Monorepo do grupo Hyze: sites (Astro), design system e API de leads (Cloudflare Workers).

```bash
corepack enable   # uma vez por máquina
pnpm install
pnpm dev          # hub :4321 · sites :4322 · consultoria :4323 · API :8787
pnpm verify       # formatação, lint, tipos, testes e build
```

| Pasta              | O que é                                                                  |
| ------------------ | ------------------------------------------------------------------------ |
| `apps/hub`         | [hyzecompany.com.br](https://hyzecompany.com.br)                         |
| `apps/sites`       | [sites.hyzecompany.com.br](https://sites.hyzecompany.com.br)             |
| `apps/consultoria` | [consultoria.hyzecompany.com.br](https://consultoria.hyzecompany.com.br) |
| `apps/api`         | API dos formulários (`api.hyzecompany.com.br`)                           |
| `packages/ui`      | Design system `@hyze/ui` (catálogo: `pnpm dev:ui`)                       |

Guia completo (stack, identidade, deploy, trabalho em dupla): [CLAUDE.md](CLAUDE.md).
