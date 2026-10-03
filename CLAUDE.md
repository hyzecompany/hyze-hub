# Site do grupo Hyze — hyzecompany.com.br

Faz parte do workspace Hyze (organização GitHub `hyzecompany`). **Leia primeiro o guia geral**:
`../CLAUDE.md` no PC do Gabriel, ou `WORKSPACE.md` no repositório `hyzecompany/.github`.
Ele traz o protocolo de trabalho em dupla (Claude no VS Code + Claude no Cowork), a stack, a
identidade visual e as convenções de animação.

## Este repositório

Página inicial do grupo (empresas, contato) e a política de privacidade (`src/pages/privacidade.astro`) usada por todos os sites.

## Comandos

```bash
pnpm install
pnpm dev   # http://localhost:4321
pnpm lint && pnpm check && pnpm build
```

## Atenção

A lista de empresas vem de `@hyze/ui/brands` — para mudar, altere no hyze-ui.

Ao terminar uma tarefa: registre no topo de `docs/HANDOFF.md`, commite (trailer `Agente: vscode`
ou `Agente: cowork`) e faça push (o Cowork não faz push — deixa anotado no HANDOFF).
