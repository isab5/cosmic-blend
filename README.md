# 🪐 Cosmic Blend

[![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![DummyJSON API](https://img.shields.io/badge/DummyJSON%20API-009688?logo=json&logoColor=white)](https://dummyjson.com/)
[![CSS Modules](https://img.shields.io/badge/CSS%20Modules-1572B6?logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)

**Cosmic Blend** é uma simulação de e-commerce desenvolvida com **Next.js**, utilizando **CSS Modules** e **TailwindCSS** para o estilo.  
O projeto consome dados de produtos de uma **API pública (DummyJSON)**, permitindo visualizar e testar a navegação em um ambiente semelhante a uma loja virtual real.

---

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/) – Framework React para aplicações web modernas  
- [React](https://react.dev/) – Biblioteca base para interfaces  
- [TailwindCSS](https://tailwindcss.com/) – Estilização rápida e responsiva  
- CSS Modules – Estilo escopo local para componentes  
- [DummyJSON API](https://dummyjson.com/) – API pública de produtos para simulação

---

## 📦 Instalação

Clone o repositório:

```bash
https://github.com/isab5/cosmic-blend.git
```
```bash
cd cosmic-blend
```

Instale as dependências:

```bash
npm install
# ou
yarn
# ou
pnpm install
# ou
bun install
```

---

## 🛠️ Desenvolvimento

Rodar o servidor local:

```bash
npm run dev
# ou
yarn dev
```

Abra no navegador:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura do Projeto (resumida)

```txt
crystal-amour/
├── public/                     # Arquivos estáticos
│   ├── fonts/                  # Fontes customizadas
│   ├── icons/                  # Ícones
│   └── img/                    # Imagens
│
├── src/
│   ├── app/                    # Rotas e páginas (App Router)
│   │   ├── globals.css         # Estilos globais (Tailwind + reset)
│   │   ├── layout.jsx          # Layout raiz (Header + Footer)
│   │   ├── page.jsx            # Página inicial (/)
│   │   ├── loading.jsx         # Tela de carregamento
│   │   ├── not-found.jsx       # Página 404
│   │   ├── notFound.module.css # Estilos específicos da 404
│   │   │
│   │   ├── aboutapi/           # Página institucional (/aboutapi)
│   │   │   └── page.jsx
│   │   │
│   │   └── products/           # Listagem de produtos (/products)
│   │       ├── page.jsx
│   │       └── [id]/page.jsx   # Produto individual (/products/:id)
│   │
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   │
│   └── styles/                 # CSS Modules extras
│       └── Home.module.css
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── README.md
```

---

## ✨ Funcionalidades

- Listagem de produtos da API DummyJSON
- Página de detalhes do produto
- Layout responsivo (Tailwind)
- Estilização combinando Tailwind + CSS Modules
- Navegação simulando uma loja virtual

---

## 📜 Scripts

| Comando        | Descrição                             |
| -------------- | ------------------------------------- |
| `npm run dev`  | Inicia o servidor de desenvolvimento  |
| `npm run build`| Gera a build de produção              |
| `npm start`    | Roda a aplicação em produção          |

---

## 🤝 Contribuição

1. Faça um fork do projeto  
2. Crie uma branch  
   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. Faça commit das mudanças  
   ```bash
   git commit -m "feat: minha alteração"
   ```
4. Faça push da branch  
   ```bash
   git push origin feature/nome-da-feature
   ```
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é apenas para fins de estudo e não possui fins comerciais.  
Você pode usá-lo, modificar e estudar livremente.
