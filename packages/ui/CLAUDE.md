# Design system da Hyze (`@hyze/ui`)

Faz parte do workspace Hyze (organização GitHub `hyzecompany`). **Leia primeiro o guia geral**:
`../CLAUDE.md` no PC do Gabriel, ou `WORKSPACE.md` no repositório `hyzecompany/.github`.
Ele traz o protocolo de trabalho em dupla (Claude no VS Code + Claude no Cowork), a stack, a
identidade visual e as convenções de animação.

## Este repositório

Tokens de cor e tipografia (`src/styles/global.css`), catálogo de marcas (`src/brands.ts`), componentes Astro (`src/components`), layout base com header/footer/SEO (`src/layouts/BaseLayout.astro`), motor de animação (`src/scripts/motion.ts`) e `config/tsconfig.base.json`.

## Comandos

```bash
pnpm install
pnpm dev   # catálogo visual em http://localhost:4321 (demo/pages)
pnpm lint && pnpm check && pnpm build
```

## Atenção

Toda mudança aqui afeta todos os sites. Ao terminar: suba a versão no package.json (semver), commite, `git tag vX.Y.Z` e `git push --follow-tags`. Depois atualize os sites (`pnpm update @hyze/ui`).

Ao terminar uma tarefa: registre no topo de `docs/HANDOFF.md`, commite (trailer `Agente: vscode`
ou `Agente: cowork`) e faça push (o Cowork não faz push — deixa anotado no HANDOFF).
