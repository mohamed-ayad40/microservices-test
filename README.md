<div align="center">

# 🚀 TaskFlow — Microservices Backend

A robust, production-ready backend system built with an event-driven Microservices architecture. Features asynchronous communication via RabbitMQ, containerized services with Docker, and a fully automated CI/CD pipeline.

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)](https://www.rabbitmq.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

**[🐳 Docker Hub Profile](https://hub.docker.com/u/mohamedayad40)** · **[🌐 API Documentation](#)**

</div>

---

## ✨ Features

- **Microservices Architecture** — Fully decoupled services (User, Todo, Email) for independent scaling and deployment.
- **Event-Driven Communication** — Asynchronous messaging between services using RabbitMQ to ensure high availability and zero data loss.
- **Shared Common Library** — Centralized types, error handling, and middlewares published via a custom npm package (`@mohamed_ayad40/common`).
- **Fully Containerized** — Each service is isolated in its own Docker container, orchestrated seamlessly via Docker Compose.
- **Automated CI/CD** — Integrated GitHub Actions workflow to automatically build and push Docker images to Docker Hub on every commit to the `main` branch.
- **Type-Safe** — Developed entirely in TypeScript with strict configurations for predictable and secure runtime behavior.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Language | TypeScript |
| Message Broker | RabbitMQ |
| Database | MongoDB |
| Containerization | Docker & Docker Compose |
| CI/CD Pipeline | GitHub Actions |
| Package Manager | npm (with Workspaces/Monorepo setup) |

---

## 📁 Project Structure

```text
├── .github/workflows/   # CI/CD pipelines for Docker build & push
├── services/            # Microservices parent directory
│   ├── email-service/   # Consumes RabbitMQ events to send notifications
│   ├── todo-service/    # Manages user tasks and emits creation/update events
│   └── user-service/    # Handles authentication, profiles, and JWT generation
├── docker-compose.yml   # Infrastructure and orchestration configuration
├── package.json         # Root package (Monorepo shared dependencies)
└── README.md            # Project documentation
```

### 🏗️ Typical Service Anatomy
Each microservice follows a clean, modular structure inside its directory:

```text
├── src/
│   ├── config/      # Database & RabbitMQ connection setups
│   ├── middleware/  # Auth and request validation
│   ├── services/    # Core business logic
│   ├── types/       # TypeScript interfaces and types
│   └── utils/       # Shared helpers
├── Dockerfile       # Container build instructions
├── tsconfig.json    # TypeScript configuration
└── package.json     # Service-specific dependencies
```