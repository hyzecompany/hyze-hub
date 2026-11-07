# Hyze Consultoria — consultoria.hyzecompany.com.br (`apps/consultoria`)

Parte do monorepo Hyze. **Leia primeiro o [CLAUDE.md da raiz](../../CLAUDE.md)** (protocolo de trabalho
em dupla, stack, identidade visual, animações, como rodar e publicar).

Consultoria e suporte em TI para pequenas e médias empresas, presencial na região e remoto.
Serviços: infraestrutura e redes, suporte técnico, nuvem (Microsoft 365/Google Workspace) e
automação. Conteúdo em `src/content.ts`; ícones de `@lucide/astro`.

- Porta 4323 (`pnpm dev` na raiz sobe tudo).
- Pendências: preços dos planos e cidade/região do atendimento presencial (`REGION`) em
  `src/content.ts`.

Ao terminar: `pnpm verify` na raiz, entrada no topo de [docs/HANDOFF.md](../../docs/HANDOFF.md), commit e push.
