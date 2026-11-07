# Hyze — monorepo do grupo (sites, design system e API)

Tudo da Hyze fica **neste único repositório** (organização GitHub `hyzecompany`). Cada pasta em
`apps/` e `packages/` tem um `CLAUDE.md` curto com os detalhes dela.

## 1. Estrutura

| Pasta              | Pacote              | O que é                                               | Publicado em                     |
| ------------------ | ------------------- | ----------------------------------------------------- | -------------------------------- |
| `apps/hub`         | `@hyze/hub`         | Site do grupo + política de privacidade               | `hyzecompany.com.br`             |
| `apps/sites`       | `@hyze/sites`       | Hyze Sites — criação de sites                         | `sites.hyzecompany.com.br`       |
| `apps/consultoria` | `@hyze/consultoria` | Hyze Consultoria — consultoria e suporte em TI        | `consultoria.hyzecompany.com.br` |
| `apps/api`         | `@hyze/api`         | API dos formulários (Hono + D1 + Turnstile)           | `api.hyzecompany.com.br`         |
| `packages/ui`      | `@hyze/ui`          | Design system: tokens, fonte, logo, layout, animações | — (usado pelos sites)            |

Os sites usam o design system direto do workspace (`"@hyze/ui": "workspace:*"`): mudou em
`packages/ui`, os sites recarregam na hora. Não há versão nem tag para publicar.

Configuração compartilhada fica na raiz: `tsconfig.base.json`, `eslint.config.js`,
`.prettierrc.json`, `.nvmrc`, `.pnpmfile.cjs` (fixa o `@emnapi` na versão estável) e o CI.

## 2. Rodar localmente

```bash
corepack enable   # uma vez por máquina (ativa o pnpm)
pnpm install
pnpm dev          # sobe TUDO e mostra os links para o PC e para o celular
```

**Um comando só, de propósito** — o Gabriel não quer comandos separados por app. O `pnpm dev`
(`scripts/dev.mjs`) sobe os 3 sites, a API e o catálogo do design system, já abertos na rede
local, e imprime os links com o IP atual do PC (detectado a cada execução, funciona em qualquer
Wi-Fi). Se sobrou um servidor antigo rodando, ele é substituído (`astro dev --force`).

| Porta | O quê                         |
| ----- | ----------------------------- |
| 4321  | hub (site do grupo)           |
| 4322  | Hyze Sites                    |
| 4323  | Hyze Consultoria              |
| 4320  | catálogo do design system     |
| 8787  | API de leads (banco D1 local) |

Em dev os formulários enviam para a API local na porta 8787 do mesmo endereço da página (no
celular, o IP do PC). A API cria sozinha o `.dev.vars` com as chaves de teste do Turnstile,
aplica as migrações locais e, com `ALLOW_LOCALHOST=true`, aceita `localhost` e IPs de rede local.

Antes de commitar: **`pnpm verify`** (formatação, lint, tipos, testes e build de tudo).

## 3. Trabalho em dupla (OBRIGATÓRIO)

Dois agentes editam este repositório: **Claude no VS Code** (local) e **Claude no Cowork**
(remoto, pela mesma pasta). Nenhum é notificado do que o outro fez — a sincronização é por
**disco + git + `docs/HANDOFF.md`**.

- **Ao começar:** `git status` e `git log --oneline -10`; leia o topo do `docs/HANDOFF.md`.
  Alterações não commitadas que não são suas: **não sobrescreva** — pergunte ao Gabriel.
- **Durante:** commits pequenos, em português, Conventional Commits (escopo = app, ex.:
  `feat(consultoria): …`), com o trailer `Agente: vscode` ou `Agente: cowork`. Nada de
  `push --force`, `reset --hard` ou rebase sem pedido.
- **Ao terminar:** `pnpm verify`, entrada no topo do `docs/HANDOFF.md`, commit e `git push`.
  Nunca termine com a árvore suja.
- O Claude do Cowork não tem as credenciais do GitHub: **quem faz `git push` é o Claude do VS Code**
  (ou o Gabriel). O Cowork commita localmente e avisa no HANDOFF que falta o push.

## 4. Publicar

- **Automático:** cada push na `main` roda o CI (`.github/workflows/ci.yml`) e, se passar, publica
  a API (com migrações D1) e os 3 sites na Cloudflare. Precisa dos segredos
  `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID` e das variáveis `PUBLIC_TURNSTILE_SITE_KEY` e
  `PUBLIC_CF_ANALYTICS_TOKEN` no GitHub.
- **Manual / primeira vez:** `pnpm run deploy` (roda `scripts/colocar-no-ar.ps1`): cria/usa o
  D1, aplica migrações, grava o segredo do Turnstile, publica a API e os 3 sites.

## 5. Nova empresa do grupo

1. Em `packages/ui/src/brands.ts`, ative/adicione a marca.
2. Copie `apps/sites` para `apps/<slug>`; ajuste `package.json` (`name: @hyze/<slug>`),
   `astro.config.mjs` (`site` e uma porta nova), `wrangler.jsonc` (`name` e domínio),
   `brandLabel` e o conteúdo em `src/content.ts`.
3. Use `<LeadForm brand="<slug>" … />` — os leads caem na mesma API.
4. Adicione o app ao matrix de deploy em `.github/workflows/ci.yml`, a `scripts/colocar-no-ar.ps1`
   e a porta nova em `scripts/dev.mjs`.

## 6. Stack e decisões (não trocar sem conversar)

TypeScript estrito · pnpm 10 (workspace) · Node 22+ · **Astro 7** estático servido como **static
assets de Workers** (não Pages) · **Tailwind 4** (tokens em `packages/ui/src/styles/global.css`) ·
**Motion + Lenis + View Transitions** · **Hono + Zod + D1 + Drizzle + Turnstile** na API · Vitest
no runtime dos Workers · ESLint + Prettier · GitHub Actions · Renovate.
Tudo no **plano gratuito da Cloudflare**; Next.js descartado (limites de 3 MB/10 ms).
`compatibility_date` em `2026-08-15` (limite do workerd local).

## 7. Identidade e animação

- Cores: `navy-950 #0D1B2A`, `platinum #E0E1DD`; apoio `navy-900 #1B263B`, `navy-700 #415A77`,
  `navy-400 #778DA9`, `platinum-50 #F4F5F2`. Poppins 600 (logo/títulos) e 200 (textos).
- Logo `Hyze.` + rótulo da empresa (`<Logo label="consultoria" />`). Slogan: "Muito além do código".
- Estilo pedido pelo Gabriel: **moderno, clean, fluido, com animações**.
- Ganchos de animação: `data-hero` (entrada), `data-reveal` (ao rolar), `data-stagger`
  (filhos em cascata), `<Logo animated />`; utilitários `card-hover` e `link-underline`.
  Sempre respeitar `prefers-reduced-motion` e funcionar sem JavaScript.
- Use só tokens (`bg-navy-950`…), nunca hex solto nos componentes. Texto público em pt-BR.

## 8. Pendências conhecidas

WhatsApp (`packages/ui/src/brands.ts`), preços (`src/content.ts` dos sites), cidade do atendimento
presencial (`apps/consultoria/src/content.ts`), razão social/CNPJ na política de privacidade,
`database_id` do D1 e chaves Turnstile. O Gabriel tem MEI; atividade de desenvolvimento de
software não é permitida ao MEI — assunto para o contador, não altere textos jurídicos sem pedido.
