# EasyTech Corp

A RESTful backend API for managing participants, todos, and user authentication. Built for event and activity management with support for both adult and underage participants, including parent records and class typology assignments.

---

## Tech Stack

- **Runtime:** Node.js + TypeScript 5.2
- **Framework:** Express 4.18
- **Database:** MongoDB via Mongoose 7.3
- **Auth:** Passport.js (Local + JWT strategies), bcrypt, jsonwebtoken
- **Validation:** class-validator + class-transformer
- **Other:** cors, morgan, dotenv, date-fns, uuid, lodash

---

## Project Structure

```
src/
├── api/
│   ├── adultPartecipant/     # Adult participant CRUD
│   ├── underagePartecipant/  # Underage participant CRUD
│   ├── uParents/             # Parent records for underage participants
│   ├── auth/                 # Register & login
│   ├── users/                # User profile management
│   ├── classTipology/        # Class type management
│   ├── todos/                # Todo/task management
│   └── routes.ts             # Main API router
├── utils/
│   ├── auth/                 # Passport strategies & JWT middleware
│   └── validation.middleware.ts
├── errors/                   # Custom error classes
├── app.ts                    # Express app setup
└── index.ts                  # Entry point
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
MONGO_DB_URI_CARLO=mongodb://localhost:27017/easytechcorp
```

> **Note:** The JWT secret is currently hardcoded as `"secret"` in `src/utils/auth/jwt/jwt-strategy.ts` and `src/api/auth/auth.controller.ts`. It should be moved to an environment variable before deploying to production.

### Running

```bash
# Development (auto-reload)
npm run dev

# Production
npm start

# Build TypeScript
npm run build

# Generate seed data
npm run gendata
```

The server listens on port **8080**.

---

## API Reference

All protected routes require a `Bearer <token>` JWT in the `Authorization` header.

### Authentication

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | No | Register a new user |
| POST | `/api/auth/login` | No | Login and receive JWT |

### Users

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/users/me` | JWT | Get current user profile |
| GET | `/api/users/` | JWT | List all users |

### Todos

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/todos/` | JWT | Get todos (query: `showCompleted=boolean`) |
| POST | `/api/todos/` | JWT | Create a new todo |
| PATCH | `/api/todos/:id/check` | JWT | Mark todo as completed |
| PATCH | `/api/todos/:id/uncheck` | JWT | Mark todo as incomplete |
| POST | `/api/todos/:id/assignTo` | JWT | Assign todo to another user |
| DELETE | `/api/todos/:id/delete` | JWT | Delete a todo |
| DELETE | `/api/todos/:id/deleteByUser` | JWT | Delete all todos for a user |

### Adult Participants

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/partecipant/add` | JWT | Add a new adult participant |
| GET | `/api/partecipant/find` | JWT | List all adult participants |
| GET | `/api/partecipant/getOne` | JWT | Get one adult participant |
| PATCH | `/api/partecipant/update` | JWT | Update an adult participant |

### Underage Participants

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/upartecipant/addU` | JWT | Add a new underage participant |
| GET | `/api/upartecipant/findU` | JWT | List underage participants |
| GET | `/api/upartecipant/getOneU` | JWT | Get one underage participant |

### Class Typologies

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/tipology/add` | — | Add a new class type |
| GET | `/api/tipology/list` | — | List all class types |
| GET | `/api/tipology/getOne` | — | Get one class type |

---

## Data Models

### User
| Field | Type | Notes |
|-------|------|-------|
| firstName | String | |
| lastName | String | |
| picture | String | Default avatar URL |
| fullName | Virtual | firstName + lastName |

### Participant (Adult & Underage)
| Field | Type | Notes |
|-------|------|-------|
| axeraCode | String | Auto-generated UUID |
| firstName, lastName | String | |
| age | Number | |
| address | String | |
| nationalInsuranceNumber | String | Italian codice fiscale |
| email | String | |
| telephoneNumber | Number | |
| tipology | ObjectId | Ref to ClassTipologies |
| parent | ObjectId | Underage only — ref to uParents |
| iscriptionForm | Boolean | |
| privacyAccepted | Boolean | |
| imageReleaseAccepted | Boolean | |
| paymentDone | Boolean | |
| paymentVerified | Boolean | |

### Todo
| Field | Type | Notes |
|-------|------|-------|
| title | String | Required |
| dueDate | Date | Optional |
| completed | Boolean | Default: false |
| assignedTo | ObjectId | Ref to User |
| createdBy | ObjectId | Ref to User, required |
| expired | Virtual | true if past dueDate and not completed |

---

## OpenAPI Specification

An OpenAPI spec for the todos endpoints is available at `sim-todo.yaml`.
