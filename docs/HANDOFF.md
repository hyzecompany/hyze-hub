# Diário de passagem — Hyze

Entradas novas no topo. Modelo:

```
## AAAA-MM-DD HH:MM — <vscode | cowork>
- Feito: …
- Pendente / próximo passo: …
- Atenção: …
```

---

## 2026-11-07 — vscode

- Feito: os 5 repositórios voltaram a ser **um monorepo** (pnpm workspace), com o histórico de
  cada um preservado (`git subtree`): `apps/hub`, `apps/sites`, `apps/consultoria`, `apps/api`
  (ex-hyze-leads-api) e `packages/ui` (ex-hyze-ui, agora `workspace:*` — sem versões/tags).
  Configuração única na raiz (ESLint, Prettier, tsconfig base, Renovate, CI). `pnpm dev` sobe
  tudo; `pnpm verify` valida tudo. CI único com deploy dos 4 Workers na `main`.
- Atenção: `.pnpmfile.cjs` fixa `@emnapi/*` em 1.11.3 — a 2.0 beta quebrava o `astro check`.
- Pendente (Gabriel): renomear o repositório no GitHub de `hyze-hub` para `hyzecompany`
  (Settings → Rename; o GitHub redireciona o endereço antigo) e arquivar os repos antigos
  `hyze-ui`, `hyze-sites`, `hyze-consultoria` e `hyze-leads-api` (Settings → Archive). O repo
  `.github` continua só para o perfil da organização; os workflows reutilizáveis e os scripts
  `workspace/` dele não são mais usados.

## 2026-10-03 — cowork (histórico dos repositórios separados)

- Feito: site da Hyze Consultoria (serviços, onde atendemos, planos, como funciona, FAQ,
  diagnóstico gratuito via formulário) usando o design system e as animações do hyze-ui.
- Feito: repositórios separados criados a partir do antigo monorepo `hyzecompany`.
