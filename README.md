<div align="center">

# 📚 StudyOrganizer

### Plataforma Full Stack para Gestão Inteligente de Estudos

[![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=csharp&logoColor=white)](https://docs.microsoft.com/en-us/dotnet/csharp/)
[![.NET](https://img.shields.io/badge/.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SQL Server](https://img.shields.io/badge/SQL_Server-CC2927?style=flat-square&logo=microsoftsqlserver&logoColor=white)](https://www.microsoft.com/sql-server)

</div>

---

## 📌 Sobre o Projeto

O **StudyOrganizer** é uma aplicação Full Stack desenvolvida para resolver um problema real: a dificuldade de organizar e manter consistência nos estudos ao longo do tempo.

Com ele é possível criar rotinas, acompanhar progresso e gerenciar metas de forma estruturada — tudo em uma interface moderna e responsiva.

> *"Construído do zero com arquitetura separada de API e front-end, como se fosse um produto real."*

---

## 🏗️ Arquitetura

```
StudyOrganizer/
├── StudyOrganizer.API/        # Back-end: ASP.NET Core Web API
│   ├── Controllers/           # Endpoints REST
│   ├── Services/              # Regras de negócio
│   ├── Repositories/          # Acesso a dados
│   └── Models/                # Entidades do domínio
│
└── StudyOrganizer.Web/        # Front-end: Angular
    ├── src/app/
    │   ├── components/        # Componentes reutilizáveis
    │   ├── pages/             # Páginas da aplicação
    │   ├── services/          # Comunicação com a API
    │   └── models/            # Interfaces TypeScript
    └── environments/
```

---

## ⚙️ Stack Tecnológica

### Back-end
| Tecnologia | Uso |
|---|---|
| C# / .NET Core | Linguagem e framework principal |
| ASP.NET Core Web API | Criação dos endpoints REST |
| SQL Server | Banco de dados relacional |
| Entity Framework Core | ORM para acesso ao banco |

### Front-end
| Tecnologia | Uso |
|---|---|
| Angular | Framework SPA |
| TypeScript | Tipagem estática |
| HTML5 / SCSS | Estrutura e estilização |
| VS Code | Editor de desenvolvimento |

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js 18+](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
- [SQL Server](https://www.microsoft.com/sql-server) ou SQL Server Express

### Back-end (API)

```bash
# Clone o repositório
git clone https://github.com/Endossin/StudyOrganizer.git
cd StudyOrganizer/StudyOrganizer.API

# Configure a connection string no appsettings.json
# "DefaultConnection": "Server=.;Database=StudyOrganizerDB;Trusted_Connection=True;"

# Rode as migrations
dotnet ef database update

# Inicie a API
dotnet run
```

A API estará disponível em `https://localhost:7000`

### Front-end (Angular)

```bash
cd StudyOrganizer/StudyOrganizer.Web

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
```

A aplicação estará disponível em `http://localhost:4200`

---

## ✨ Funcionalidades

- [x] Cadastro e autenticação de usuários
- [x] Criação e gerenciamento de rotinas de estudo
- [x] Controle de metas e progresso
- [x] Dashboard com visualização de desempenho
- [x] API RESTful documentada
- [ ] Notificações e lembretes *(em desenvolvimento)*
- [ ] Modo dark/light *(em desenvolvimento)*

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request.

---

<div align="center">

Desenvolvido por [João Victor Batista](https://github.com/Endossin) • [LinkedIn](https://www.linkedin.com/in/joão-victor-costa-batista-8b59b1210/)

</div>
