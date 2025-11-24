# Portfólio Profissional - Eduardo Muniz Fontelles

Portfólio profissional moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações para React
- **React Icons** - Ícones populares para React

## 📦 Instalação

1. Instale as dependências:

```bash
npm install
```

## 🏃 Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 🏗️ Build para Produção

Para criar o build de produção:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

Para visualizar o build localmente:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── components/          # Componentes React
│   │   ├── Navbar.tsx      # Barra de navegação
│   │   ├── Hero.tsx        # Seção inicial/capa
│   │   ├── About.tsx       # Seção sobre
│   │   ├── Skills.tsx      # Seção de habilidades
│   │   ├── Projects.tsx    # Seção de projetos
│   │   ├── Experience.tsx  # Seção experiência/formação
│   │   └── Contact.tsx     # Seção de contato
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos globais e Tailwind
├── index.html              # HTML principal
├── package.json            # Dependências do projeto
├── tailwind.config.js      # Configuração do Tailwind
├── tsconfig.json           # Configuração do TypeScript
└── vite.config.ts          # Configuração do Vite
```

## ✏️ Personalização

### Atualizar Informações de Contato

Edite o arquivo `src/components/Contact.tsx` e substitua os placeholders:

- fontelleseduardo@gmail.com - Seu endereço de email
- https://www.linkedin.com/in/eduardo-muniz-fontelles-920109224/ - URL do seu perfil LinkedIn
- https://github.com/EduardoMunizFontelles - URL do seu perfil GitHub

### Adicionar Links de Projetos

No arquivo `src/components/Projects.tsx`, adicione a propriedade `githubUrl` aos projetos:

```typescript
{
  title: 'Meu Projeto',
  // ... outras propriedades
  githubUrl: 'https://github.com/seu-usuario/seu-projeto',
}
```

### Personalizar Cores

As cores podem ser personalizadas no arquivo `tailwind.config.js` na seção `theme.extend.colors.primary`.

## 📝 Licença

Este projeto é pessoal e privado.

