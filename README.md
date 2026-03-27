# Agenda Tributária 2026 — Next.js

Formulário de inscrição convertido de HTML puro para Next.js 14 com App Router, TypeScript e Tailwind CSS.

## Estrutura do projeto

```
agenda-tributaria-2026/
├── app/
│   ├── api/
│   │   └── inscricao/
│   │       └── route.ts          ← API Route para Google Sheets
│   ├── globals.css               ← Estilos globais + variáveis CSS
│   ├── layout.tsx
│   └── page.tsx                  ← Página principal (orquestra as seções)
├── components/
│   ├── Background.tsx            ← Fundo animado
│   ├── EmailJSInit.tsx           ← Inicializa EmailJS no client
│   ├── FieldGroup.tsx            ← Input com label + erro
│   ├── FormSection.tsx           ← Formulário de inscrição
│   ├── LandingSection.tsx        ← Tela inicial com CTA
│   ├── SuccessSection.tsx        ← Tela de sucesso
│   └── Toast.tsx                 ← Notificação flutuante
├── .env.local.example            ← Template de variáveis de ambiente
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Setup

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.local.example` para `.env.local` e preencha:

```bash
cp .env.local.example .env.local
```

Edite `.env.local`:

```env
# EmailJS — https://www.emailjs.com
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=SEU_PUBLIC_KEY_AQUI
NEXT_PUBLIC_EMAILJS_SERVICE_ID=SEU_SERVICE_ID_AQUI
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_org

# E-mail que receberá notificações de inscrição
NEXT_PUBLIC_EMAIL_ORGANIZADOR=SEU_EMAIL_AQUI@dominio.com

# Google Apps Script (backend para Google Sheets)
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_SCRIPT_ID/exec
```

> **Atenção:** `GOOGLE_SCRIPT_URL` é uma variável **server-side** (sem `NEXT_PUBLIC_`).  
> A chamada ao Google Sheets agora passa pela API Route `/api/inscricao`, mantendo a URL oculta do navegador.

### 3. Adicionar imagem hero (opcional)

Coloque a imagem do evento em:

```
public/hero.jpg
```

Se não existir, um placeholder colorido é exibido automaticamente.

### 4. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

### 5. Build para produção

```bash
npm run build
npm start
```

## Diferenças em relação ao HTML original

| Original (HTML puro) | Next.js |
|---|---|
| CONFIG em JS inline | Variáveis de ambiente (`.env.local`) |
| Google Script URL exposta no frontend | Protegida via API Route server-side |
| Tudo em um arquivo | Componentes separados e reutilizáveis |
| Sem tipagem | TypeScript completo |
| Sem hot reload estruturado | Next.js Dev Server com Fast Refresh |

## Deploy recomendado

**Vercel** (zero config):

```bash
npm i -g vercel
vercel
```

Configure as variáveis de ambiente no painel da Vercel em:  
`Settings → Environment Variables`
