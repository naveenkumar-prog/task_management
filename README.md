# Task Management Application

A full-stack Task Management Application built using React.js, Node.js, Express.js, and MySQL. The application provides role-based access with separate Admin and User dashboards.

---

# Submission Details

## GitHub Repository

```txt
PASTE_YOUR_GITHUB_REPOSITORY_LINK_HERE
```

## Live Application

```txt
PASTE_YOUR_DEPLOYMENT_LINK_HERE
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

---

# Project Structure

```txt
project-root/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── models/
│   ├── config/
│   ├── package.json
│   └── .env
│
├── .gitignore
├── README.md
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

# 1. Clone Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate to project directory:

```bash
cd <PROJECT_FOLDER_NAME>
```

---

# 2. Database Setup

Open MySQL Workbench and create a database:

```sql
CREATE DATABASE task_management;
```

Use the created database for the application.

---

# 3. Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_management
DB_PORT=3306

JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm start
```

or

```bash
npm run dev
```

Backend will run on:

```txt
http://localhost:5000
```

---

# 4. Frontend Setup

Open a new terminal.

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside frontend folder:

```env
VITE_API_URL=http://localhost:5000
```

Start frontend:

```bash
npm run dev
```

Frontend will run on:

```txt
http://localhost:5173
```

---

# Running the Application

## Start Backend

```bash
cd backend
npm start
```

## Start Frontend

```bash
cd frontend
npm run dev
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

# GitHub Setup

Initialize Git:

```bash
git init
```

Add Remote Repository:

```bash
git remote add origin <YOUR_REPOSITORY_URL>
```

Verify:

```bash
git remote -v
```

Add Files:

```bash
git add .
```

Commit Changes:

```bash
git commit -m "Initial Submission"
```

Push Code:

```bash
git branch -M main
git push -u origin main
```

---

# Deployment (Bonus)

## Option 1: Live Deployment

Deploy frontend using Vercel.

Deploy backend using Render, Railway, or any Node.js hosting platform.

Update frontend API URL after backend deployment.

Example:

```env
VITE_API_URL=https://your-backend-url.com
```

---

## Option 2: Dockerization

Create Dockerfiles for frontend and backend.

Build Images:

```bash
docker build -t task-frontend .
docker build -t task-backend .
```

Run Containers:

```bash
docker run -p 5173:5173 task-frontend
docker run -p 5000:5000 task-backend
```

---

# .gitignore

Create a `.gitignore` file in the project root:

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

--

# Author

Naveenkumar R D

Full Stack Developer

React.js | Node.js | Express.js | MySQL
