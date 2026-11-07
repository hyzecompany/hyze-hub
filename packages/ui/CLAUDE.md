# Design system da Hyze — `@hyze/ui` (`packages/ui`)

Parte do monorepo Hyze. **Leia primeiro o [CLAUDE.md da raiz](../../CLAUDE.md)** (protocolo de trabalho
em dupla, stack, identidade visual, animações, como rodar e publicar).

Tokens de cor e tipografia (`src/styles/global.css`), catálogo de marcas (`src/brands.ts`),
componentes Astro (`src/components`), layout base com header/footer/SEO
(`src/layouts/BaseLayout.astro`) e motor de animação (`src/scripts/motion.ts`).

- Catálogo visual: `pnpm dev:ui` na raiz → http://localhost:4320 (páginas em `demo/pages`).
- Os sites usam este pacote direto do workspace (`"@hyze/ui": "workspace:*"`): mudou aqui,
  os sites em `pnpm dev` recarregam na hora. Não há versão para publicar.
- Toda mudança aqui afeta todos os sites — rode `pnpm verify` na raiz.

Ao terminar: `pnpm verify` na raiz, entrada no topo de [docs/HANDOFF.md](../../docs/HANDOFF.md), commit e push.
