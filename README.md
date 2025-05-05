# Flicklet.js

> Pequenos componentes, grandes resultados.

**Flicklet.js** é uma biblioteca JavaScript minimalista para construção de interfaces usando elementos nativos do DOM.
Leve, rápida e ainda acompanha um CLI que facilita a criação e execução de projetos.

---

## ✨ Features

- Criação de componentes como funções simples.
- Estado reativo minimalista (`trigger` e `watch`).
- Atualização automática de elementos HTML com mudanças de estado.
- CLI disponível para inicializar, rodar e buildar projetos.
- Sem dependências externas.
- Tamanho ultra leve.

---

## 📦 Instalação

```bash
npm install flicklet
```

Ou via Yarn:

```bash
yarn add flicklet
```

---

## 🚀 CLI disponível: `npx flick`

Depois de instalar, você poderá usar o CLI diretamente:

### Comandos disponíveis:

| Comando           | Descrição                                                                                |
| :---------------- | :--------------------------------------------------------------------------------------- |
| `npx flick init`  | Inicializa um projeto padrão (`index.ts`, `index.html`, `index.scss` e `tsconfig.json`). |
| `npx flick start` | Inicia um servidor de desenvolvimento com Webpack Dev Server.                            |
| `npx flick build` | Realiza o build de produção no diretório `build/`.                                       |

---

## ⚡ Exemplo Rápido

### Inicializar um novo projeto

```bash
npx flicklet init
```

### Rodar o projeto em modo desenvolvimento

```bash
npx flicklet start
```

### Buildar o projeto para produção

```bash
npx flicklet build
```

---

## 🛠 Como usar Flicklet.js no projeto

### 1. Criando seu app

```typescript
import { registerApp } from "flick";

const app = document.createElement("div");
registerApp(app);
```

### 2. Criando componentes

```typescript
import Container from "flick/Container";
import Label from "flick/Label";

const MyLabel = () => {
  Label({
    text: "Hello, Flicklet!",
    style: { color: "blue", fontSize: "24px" },
  });
};

const App = Container({
  children: [MyLabel()],
  style: { display: "flex", justifyContent: "center", marginTop: "50px" },
});

registerApp(App);
```

### 3. Trabalhando com estado reativo

```typescript
import { store } from "flick";

const counter = store.localState(0);

const counterLabel = Label({
  text: counter.watch((state) => `Counter: ${state}`),
});

setInterval(() => {
  counter.setState((prev) => prev + 1);
}, 1000);

registerApp(counterLabel);
```

---

## 📚 API Rápida

| Função/Componente                | Descrição                                                    |
| :------------------------------- | :----------------------------------------------------------- |
| `registerApp(app: HTMLElement)`  | Monta seu app no DOM, limpando o `<body>`.                   |
| `Container(props)`               | Cria um container genérico (`div`, `section`, `form`, etc.). |
| `Label(props)`                   | Cria um label dinâmico com texto reativo ou fixo.            |
| `store.localState(initialState)` | Cria um estado reativo minimalista.                          |

---

## 🎯 Quando usar Flicklet.js?

- Projetos que exigem máxima leveza e performance.
- Painéis administrativos, ferramentas internas e prototipagem rápida.
- Substituição de frameworks pesados para interfaces diretas com o DOM.

---

## 📄 Licença

[MIT License](LICENSE)
