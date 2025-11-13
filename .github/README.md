# 🎫 Sistema de Chamados (Ticket Master)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase&logoColor=white)

Este é um projeto de um sistema de helpdesk para abertura e gerenciamento de chamados de clientes. Desenvolvido em ReactJS e utilizando Firebase como backend, a plataforma permite o cadastro de clientes, criação de chamados, atualização de status e personalização do perfil do usuário.

---

## ✨ Funcionalidades

*   **Autenticação de Usuários:** Sistema completo de Login, Cadastro e Logout.
*   **Gerenciamento de Perfil:** O usuário pode visualizar e atualizar seu nome e foto de perfil.
*   **Dashboard:** Visualização de todos os chamados registrados em uma tabela, com acesso rápido para edição ou detalhes.
*   **Gestão de Clientes (CRUD):**
    *   Cadastro de novos clientes (empresas).
    *   Listagem de todos os clientes.
    *   (Funcionalidade de edição e exclusão pode ser implementada).
*   **Gestão de Chamados (CRUD):**
    *   Abertura de novos chamados, associando a um cliente e definindo assunto e status.
    *   Edição de chamados existentes para atualizar informações ou alterar o status (`Aberto`, `Progresso`, `Atendido`).
    *   Interface intuitiva para criação e edição de chamados.
*   **Persistência de Login:** O usuário permanece logado mesmo após fechar o navegador, graças ao `localStorage`.
*   **Notificações:** Feedback visual para o usuário através de toasts para ações como login, cadastro e atualizações.

---

## 🚀 Tecnologias Utilizadas

*   **Frontend:**
    *   React.js
    *   React Router DOM
    *   React Icons
    *   React Toastify
*   **Backend & Banco de Dados:**
    *   Firebase
        *   **Authentication:** Para gerenciamento de usuários.
        *   **Firestore:** Como banco de dados NoSQL para armazenar clientes e chamados.
        *   **Storage:** Para upload e armazenamento das fotos de perfil dos usuários.
*   **Linguagem:**
    *   JavaScript
    *   CSS3

---

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

*   Node.js (versão LTS recomendada)
*   Yarn ou NPM
*   Uma conta no Firebase

### 1. Clone o Repositório

```bash
git clone https://github.com/diatsilva007/ticket-master.git

cd ticket-master
```

### 2. Instale as Dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure o Firebase

1.  Vá para o console do Firebase.
2.  Crie um novo projeto.
3.  Na tela do seu projeto, adicione um novo aplicativo Web (ícone `</>`).
4.  Copie as credenciais de configuração do Firebase (o objeto `firebaseConfig`).
5.  No seu projeto, renomeie o arquivo `src/services/firebaseConnection.example.js` para `src/services/firebaseConnection.js` ou crie-o se não existir.
6.  Cole suas credenciais do Firebase dentro deste arquivo:

    ```javascript
    // src/services/firebaseConnection.js

    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';
    import { getAuth } from 'firebase/auth';
    import { getStorage } from 'firebase/storage';

    const firebaseConfig = {
      apiKey: "SUA_API_KEY",
      authDomain: "SEU_AUTH_DOMAIN",
      projectId: "SEU_PROJECT_ID",
      storageBucket: "SEU_STORAGE_BUCKET",
      messagingSenderId: "SEU_MESSAGING_SENDER_ID",
      appId: "SEU_APP_ID"
    };

    const firebaseApp = initializeApp(firebaseConfig);

    const db = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);
    const storage = getStorage(firebaseApp);

    export { db, auth, storage };
    ```

7.  Ainda no console do Firebase, ative os seguintes serviços:
    *   **Authentication:** Vá para a aba "Authentication", clique em "Get started" e ative o provedor "Email/Password".
    *   **Firestore Database:** Vá para a aba "Firestore Database", clique em "Create database" e inicie no modo de teste (ou configure as regras de segurança conforme necessário).
    *   **Storage:** Vá para a aba "Storage", clique em "Get started" e inicie no modo de teste.

### 4. Execute a Aplicação

Agora você pode iniciar o servidor de desenvolvimento:

```bash
npm start
# ou
yarn start
```

A aplicação estará disponível em `http://localhost:3000`.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.


