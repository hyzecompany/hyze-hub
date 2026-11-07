# Site do grupo Hyze — hyzecompany.com.br (`apps/hub`)

Parte do monorepo Hyze. **Leia primeiro o [CLAUDE.md da raiz](../../CLAUDE.md)** (protocolo de trabalho
em dupla, stack, identidade visual, animações, como rodar e publicar).

Página inicial do grupo (empresas, contato) e a política de privacidade
(`src/pages/privacidade.astro`) usada por todos os sites.

- Porta 4321 (`pnpm dev` na raiz sobe tudo).
- A lista de empresas vem de `@hyze/ui/brands` → altere em `packages/ui/src/brands.ts`.

Ao terminar: `pnpm verify` na raiz, entrada no topo de [docs/HANDOFF.md](../../docs/HANDOFF.md), commit e push.
