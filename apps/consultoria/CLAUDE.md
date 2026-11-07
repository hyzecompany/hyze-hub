# Hyze Consultoria — consultoria.hyzecompany.com.br

Faz parte do workspace Hyze (organização GitHub `hyzecompany`). **Leia primeiro o guia geral**:
`../CLAUDE.md` no PC do Gabriel, ou `WORKSPACE.md` no repositório `hyzecompany/.github`.
Ele traz o protocolo de trabalho em dupla (Claude no VS Code + Claude no Cowork), a stack, a
identidade visual e as convenções de animação.

## Este repositório

Consultoria e suporte em TI para pequenas e médias empresas, presencial na região e remoto. Serviços: infraestrutura e redes, suporte técnico, nuvem (Microsoft 365/Google Workspace) e automação. Conteúdo em `src/content.ts`; ícones de `@lucide/astro`.

## Comandos

```bash
pnpm install
pnpm dev   # http://localhost:4321
pnpm lint && pnpm check && pnpm build
```

## Atenção

Pendências: preços dos planos e cidade/região do atendimento presencial (`REGION`) em `src/content.ts`.

Ao terminar uma tarefa: registre no topo de `docs/HANDOFF.md`, commite (trailer `Agente: vscode`
ou `Agente: cowork`) e faça push (o Cowork não faz push — deixa anotado no HANDOFF).
