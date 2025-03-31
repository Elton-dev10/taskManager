# Task Manager API

## 📝 Descrição do Projeto
Sistema de gerenciamento de tarefas (Task Manager) desenvolvido com Spring Boot e PostgreSQL. Esta API permite o gerenciamento completo de tarefas, incluindo criação, atualização, listagem e remoção de tarefas, com suporte a diferentes níveis de prioridade e status.

## 🛠️ Tecnologias Utilizadas
- Java 21
- Spring Boot 3.4.4
- PostgreSQL
- JPA / Hibernate
- Maven
- Lombok

## 📋 Funcionalidades
- Gerenciamento completo de tarefas (CRUD)
- Filtros por status, prioridade e responsável
- Sistema de prioridades (Alta, Média, Baixa)
- Controle de status das tarefas (Pendente, Em Andamento, Concluída)
- Atribuição de responsáveis
- Gestão de prazos (deadlines)

## 🔧 Configuração do Ambiente

### Pré-requisitos
- Java 21
- PostgreSQL
- Maven

### Configuração do Banco de Dados
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/taskmanager
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
```

### Executando o Projeto
```bash
cd novoprojeto/taskManager
./mvnw spring-boot:run
```

## 📌 Endpoints da API

### Visão Geral dos Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /api/tasks | Lista todas as tarefas |
| GET | /api/tasks/{id} | Busca uma tarefa específica |
| POST | /api/tasks | Cria uma nova tarefa |
| PUT | /api/tasks/{id} | Atualiza uma tarefa existente |
| DELETE | /api/tasks/{id} | Remove uma tarefa |
| GET | /api/tasks/enums | Lista todos os enums (status, prioridades, usuários) |

### Detalhamento dos Endpoints

#### 1. Listar Todas as Tarefas
```http
GET /api/tasks
```
- **Descrição**: Retorna todas as tarefas cadastradas
- **Parâmetros de Query (opcionais)**:
  - status: PENDENTE, EM_ANDAMENTO, CONCLUIDA
  - priority: ALTA, MEDIA, BAIXA
  - responsible: JOHN_DOE, JANE_SMITH, etc.
- **Exemplo de Resposta**:
```json
[
    {
        "id": 1,
        "title": "Implementar API",
        "description": "Criar endpoints REST",
        "status": "EM_ANDAMENTO",
        "priority": "ALTA",
        "responsible": "JOHN_DOE",
        "deadline": "2024-04-30",
        "createdAt": "2024-03-30"
    }
]
```

#### 2. Criar Nova Tarefa
```http
POST /api/tasks
```
- **Descrição**: Cria uma nova tarefa
- **Corpo da Requisição**:
```json
{
    "title": "Nova Tarefa",
    "description": "Descrição da tarefa",
    "status": "PENDENTE",
    "priority": "ALTA",
    "responsible": "JOHN_DOE",
    "deadline": "2024-04-30"
}
```

#### 3. Buscar Tarefa por ID
```http
GET /api/tasks/{id}
```
- **Descrição**: Retorna uma tarefa específica pelo ID

#### 4. Atualizar Tarefa
```http
PUT /api/tasks/{id}
```
- **Descrição**: Atualiza uma tarefa existente
- **Corpo da Requisição**: Mesmo formato da criação

#### 5. Deletar Tarefa
```http
DELETE /api/tasks/{id}
```
- **Descrição**: Remove uma tarefa específica

#### 6. Listar Enums
```http
GET /api/tasks/enums
```
- **Descrição**: Retorna todos os valores possíveis para status, prioridades e responsáveis

## 📊 Modelos de Dados

### Task (Tarefa)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | Long | Identificador único da tarefa |
| title | String | Título da tarefa |
| description | String | Descrição detalhada |
| status | Enum | Status atual (PENDENTE, EM_ANDAMENTO, CONCLUIDA) |
| priority | Enum | Prioridade (ALTA, MEDIA, BAIXA) |
| responsible | Enum | Responsável pela tarefa |
| deadline | LocalDate | Data limite |
| createdAt | LocalDate | Data de criação |

## 🔍 Enums

### Status
- PENDENTE
- EM_ANDAMENTO
- CONCLUIDA

### Prioridade
- ALTA
- MEDIA
- BAIXA

### Responsáveis
- JOHN_DOE
- JANE_SMITH
- MIKE_JOHNSON
- SARAH_WILLIAMS

## 🚀 Exemplos de Uso

### Criando uma Nova Tarefa
```bash
curl -X POST http://localhost:8080/api/tasks \
-H "Content-Type: application/json" \
-d '{
    "title": "Implementar API REST",
    "description": "Criar endpoints para o sistema",
    "status": "PENDENTE",
    "priority": "ALTA",
    "responsible": "JOHN_DOE",
    "deadline": "2024-04-30"
}'
```

### Listando Tarefas com Filtro
```bash
curl "http://localhost:8080/api/tasks?status=PENDENTE&priority=ALTA"
```

## 📈 Próximos Passos
- Implementação de autenticação e autorização
- Adição de testes unitários e de integração
- Documentação com Swagger/OpenAPI
- Implementação de logs
- Containerização com Docker

## 👥 Contribuição
Sinta-se à vontade para contribuir com o projeto através de pull requests ou reportando issues.

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ como parte de um desafio técnico.
