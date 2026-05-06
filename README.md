# NexPage

Landing page em React + Vite + TypeScript.

## Estrutura

```txt
client/
  components/
    layout/              Navegação e rodapé
    landing/sections/    Seções da página inicial
    ui/                  Componentes base reutilizáveis
  data/                  Textos e listas usados pela landing page
  hooks/                 Hooks compartilhados do frontend
  lib/                   Utilitários do frontend
  pages/                 Páginas/rotas do React Router
  App.tsx                Entrada do app React
  global.css             Tailwind e estilos globais

server/                  API Express usada pelo Vite em desenvolvimento
shared/                  Tipos compartilhados entre frontend e backend
public/                  Arquivos públicos estáticos
netlify/                 Funções/configuração de deploy
```

## Rodar localmente

```bash
pnpm install
pnpm dev
```

No Windows, se o PowerShell bloquear `npm`/`pnpm`, rode pelo terminal do VS Code ou use o executável `.cmd`.
