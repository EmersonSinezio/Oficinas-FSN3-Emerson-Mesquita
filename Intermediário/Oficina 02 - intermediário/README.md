# Calculadora React com TypeScript e Tailwind CSS

![Calculadora Moderna](./public/calc.png)

Uma calculadora moderna e responsiva construída com React, TypeScript e estilizada com Tailwind CSS. Esta aplicação oferece uma interface de usuário intuitiva e todas as operações básicas de uma calculadora.

## Funcionalidades

- **Operações básicas**: Adição, subtração, multiplicação e divisão
- **Funcionalidades avançadas**:
  - Inversão de sinal (±)
  - Cálculo de porcentagem (%)
  - Suporte a números decimais
- **Histórico de operação**: Exibe a operação atual acima do display principal
- **Design responsivo**: Funciona bem em dispositivos móveis e desktop
- **Interface moderna**: Design escuro com botões coloridos e efeitos visuais
- **Feedback tátil**: Animações de botão para melhor experiência do usuário

## Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construir interfaces de usuário
- [TypeScript](https://www.typescriptlang.org/) - Adiciona tipagem estática ao JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização
- [Vite](https://vitejs.dev/) - Ferramenta de build e desenvolvimento rápido

## Como Executar o Projeto

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos

- Node.js (versão 14.x ou superior)
- npm (geralmente vem com o Node.js) ou yarn

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/calculadora-react-ts.git
cd calculadora-react-ts
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Abra o navegador em [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## Estrutura de Arquivos

```
src/
├── App.tsx
├── components/
│   ├── Calculator.tsx
│   ├── Display.tsx
│   ├── Keypad.tsx
│   └── Button.tsx
├── index.css
└── main.tsx
```

- `App.tsx`: Componente raiz da aplicação
- `components/`: Contém todos os componentes da calculadora
  - `Calculator.tsx`: Lógica principal e estado da calculadora
  - `Display.tsx`: Componente para exibir os valores
  - `Keypad.tsx`: Componente do teclado com os botões
  - `Button.tsx`: Componente de botão reutilizável
- `index.css`: Importa o Tailwind CSS e estilos globais
- `main.tsx`: Ponto de entrada da aplicação

## Personalização

Você pode personalizar a aparência da calculadora editando as classes Tailwind CSS nos componentes:

1. **Cores**: Altere as cores no arquivo `Button.tsx`

```tsx
const colorClasses = {
  default: "bg-gray-700 text-white",
  gray: "bg-gray-500 text-black",
  orange: "bg-orange-500 text-white",
};
```

2. **Tamanhos**: Ajuste os tamanhos no arquivo `Button.tsx`

```tsx
const baseClasses = `... h-16 ...`; // Altura dos botões
```

3. **Arredondamento**: Modifique o border-radius no arquivo `Button.tsx`

```tsx
const baseClasses = `... rounded-full ...`; // Botões completamente arredondados
```
