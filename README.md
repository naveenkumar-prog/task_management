# Task Management Application

🚀 **Fully Dockerized Full Stack Task Management Application with Docker Compose Support**

A full-stack Task Management Application built using React.js, Node.js, Express.js, and MySQL. The application provides role-based access with separate Admin and User dashboards.

# Default Admin Credentials

Use the following credentials to access the Admin Dashboard:

```txt
Email: admin@example.com
Password: Admin@123
```

If the admin account does not exist, run the admin seed script:

```bash
cd backend
node src/seed/seedAdmin.js
```

After seeding, use the credentials above to log in.

---

# Highlights

✅ Role-Based Authentication (Admin/User)

✅ JWT Protected Routes

✅ React Context API State Management

✅ MySQL Database Integration

✅ Dark / Light Theme Support

✅ Toast Notifications

✅ Responsive UI

✅ Fully Dockerized Application

✅ Docker Compose One-Command Setup

---

# Submission Details

## GitHub Repository

```txt
https://github.com/naveenkumar-prog/task_management/
```

## Explanation Video

```txt
PASTE_YOUR_VIDEO_LINK_HERE
```

---

# Features

## Admin Features

* Secure Login Authentication
* Create Users
* View Users
* Create Tasks
* Assign Tasks to Users
* View All Tasks
* Manage Tasks

## User Features

* Secure Login
* View Assigned Tasks
* Update Task Status
* Responsive Dashboard

## Additional Features

* JWT Authentication
* Protected Routes
* Context API State Management
* Dark / Light Theme Toggle
* Toast Notifications
* Responsive UI
* REST API Integration
* Dockerized Full Stack Application
* Docker Compose Configuration
* One-Command Project Setup

---

# Docker Support

This project is fully containerized using Docker and Docker Compose.

The application can be started with a single command without manually installing Node.js dependencies or configuring MySQL locally.

### Containerized Services

* Frontend (React + Vite)
* Backend (Node.js + Express)
* MySQL Database

### Run Entire Application

```bash
docker-compose up --build
```

This command automatically:

* Builds frontend container
* Builds backend container
* Creates MySQL container
* Connects all services through Docker network
* Starts the complete application

---

# Tech Stack

## Frontend

* React.js
* React Router DOM
* Context API
* Tailwind CSS
* Axios
* React Toastify

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs
* dotenv
* cors

## Database

* MySQL

## DevOps

* Docker
* Docker Compose

---

# Project Structure

```txt
project-root/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   └── .env
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── models/
│   ├── config/
│   ├── Dockerfile
│   ├── package.json
│   └── .env
│
├── docker-compose.yml
├── README.md
├── .gitignore
└── package.json
```

---

# Setup Instructions

## Prerequisites

Before running the application, ensure the following are installed:

* Node.js (v18 or above recommended)
* npm
* MySQL Server
* MySQL Workbench (optional)

---

# Local Development Setup

## 1. Clone Repository

```bash
git clone https://github.com/naveenkumar-prog/task_management.git
```

Navigate to project directory:

```bash
cd task_management
```

---

## 2. Database Setup

Open MySQL Workbench and create a database:

```sql
CREATE DATABASE task_management;
```

---

## 3. Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_management
DB_PORT=3306

JWT_SECRET=your_secret_key
```

Start backend:

```bash
npm run dev
```

Backend URL:

```txt
http://localhost:5000
```

---

## 4. Frontend Setup

Open a new terminal.

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Start frontend:

```bash
npm run dev
```

Frontend URL:

```txt
http://localhost:5173
```

---

# Docker Setup

## Prerequisites

Install Docker Desktop.

Verify installation:

```bash
docker --version
docker compose version
```

---

## Run Application Using Docker

From project root:

```bash
docker compose up --build
```

Application URLs:

Frontend:

```txt
http://localhost:5173
```

Backend:

```txt
http://localhost:5000
```

MySQL:

```txt
localhost:3307
```

---

## Stop Containers

```bash
docker compose down
```

---

## Remove Containers and Database Volume

```bash
docker compose down -v
```

---

# API Endpoints

## Authentication

### Login

```http
POST /api/auth/login
```

Sample Request:

```json
{
  "email": "admin@example.com",
  "password": "Admin@123"
}
```

---

## Users

### Get Users

```http
GET /api/users
```

### Create User

```http
POST /api/users
```

---

## Tasks

### Get All Tasks

```http
GET /api/tasks
```

### Create Task

```http
POST /api/tasks
```

### Get User Tasks

```http
GET /api/tasks/my-tasks
```

### Update Task

```http
PUT /api/tasks/:id
```

### Delete Task

```http
DELETE /api/tasks/:id
```

---

# Environment Variables

## Backend

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_management
DB_PORT=3306

JWT_SECRET=your_secret_key
```

## Frontend

```env
VITE_API_URL=http://localhost:5000
```

---

# .gitignore

```gitignore
frontend/node_modules/
backend/node_modules/

frontend/dist/
backend/dist/

frontend/.env
backend/.env

.vscode/
.idea/

*.log
```

---

# Author

**Naveenkumar R D**

Full Stack Developer

React.js | Node.js | Express.js | MySQL | Docker
