# Hyze — Muito além do código

Monorepo do grupo Hyze: sites (Astro), design system e API de leads (Cloudflare Workers).

```bash
corepack enable   # uma vez por máquina
pnpm install
pnpm dev          # sobe tudo e mostra os links (PC e celular)
pnpm verify       # formatação, lint, tipos, testes e build
```

| Pasta              | O que é                                                                  |
| ------------------ | ------------------------------------------------------------------------ |
| `apps/hub`         | [hyzecompany.com.br](https://hyzecompany.com.br)                         |
| `apps/sites`       | [sites.hyzecompany.com.br](https://sites.hyzecompany.com.br)             |
| `apps/consultoria` | [consultoria.hyzecompany.com.br](https://consultoria.hyzecompany.com.br) |
| `apps/api`         | API dos formulários (`api.hyzecompany.com.br`)                           |
| `packages/ui`      | Design system `@hyze/ui` (catálogo na porta 4320)                        |

Guia completo (stack, identidade, deploy, trabalho em dupla): [CLAUDE.md](CLAUDE.md).
