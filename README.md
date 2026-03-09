# Mentora Backend Assignment

## Overview

This project implements a simplified backend for a mentorship platform where **Parents, Students, and Mentors interact**.

The backend provides:

* Authentication system
* Parent–Student relationship
* Lesson creation by mentors
* Booking system for assigning students to lessons
* Lesson sessions management
* LLM-based text summarization endpoint

The system is designed using **Node.js, Express, and MongoDB** with clean modular architecture.

---

# Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (password hashing)
* Axios (API requests)
* express-rate-limit
* Google Gemini API (LLM summarization)

---

# Project Structure

```
mentora-backend
│
├── src
│   ├── controllers
│   │   ├── authController.js
│   │   ├── studentController.js
│   │   ├── lessonController.js
│   │   ├── bookingController.js
│   │   ├── sessionController.js
│   │   └── llmController.js
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── Student.js
│   │   ├── Lesson.js
│   │   ├── Booking.js
│   │   └── Session.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── studentRoutes.js
│   │   ├── lessonRoutes.js
│   │   ├── bookingRoutes.js
│   │   ├── sessionRoutes.js
│   │   └── llmRoutes.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   └── config
│       └── db.js
│
├── server.js
├── package.json
├── .env.example
└── README.md
```

---

# Installation

Clone the repository

```
git clone https://github.com/YOUR_USERNAME/mentora-backend.git
cd mentora-backend
```

Install dependencies

```
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

Example configuration:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mentora
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_api_key
```

---

# Running the Server

Start the development server

```
npm run dev
```

Server should start with:

```
MongoDB Connected
Server running on 5000
```

Base URL:

```
http://localhost:5000
```

---

# How to Test the API

You can test the backend using:

* Postman
* Thunder Client (VSCode extension)
* curl

A Postman collection is included in the repository for easy testing.

Import:

```
Mentora_API_Collection.json
```

---

# Authentication

## Signup

```
POST /auth/signup
```

Example body:

```
{
"name": "John",
"email": "john@test.com",
"password": "123456",
"role": "parent"
}
```

---

## Login

```
POST /auth/login
```

Response:

```
JWT token
```

Use this token in headers:

```
Authorization: Bearer TOKEN
```

---

# Students

Create student (Parent only)

```
POST /students
```

Body:

```
{
"name": "Alex",
"age": 14
}
```

---

Get students

```
GET /students
```

---

# Lessons

Mentors can create lessons.

```
POST /lessons
```

Example:

```
{
"title": "Math Basics",
"description": "Introduction to Algebra"
}
```

---

# Booking System

Assign a student to a lesson.

```
POST /bookings
```

Example:

```
{
"studentId": "STUDENT_ID",
"lessonId": "LESSON_ID"
}
```

---

# Sessions

Create session

```
POST /sessions
```

Example:

```
{
"lessonId": "LESSON_ID",
"date": "2026-03-10",
"topic": "Linear Equations",
"summary": "Introduction to solving equations"
}
```

---

Get lesson sessions

```
GET /sessions/lesson/:id
```

---

# LLM Text Summarization

Endpoint

```
POST /llm/summarize
```

Example request:

```
{
"text": "Artificial intelligence is transforming industries including healthcare, finance, education and transportation."
}
```

Example response

```
{
"summary": "...",
"model": "gemini"
}
```

---

# Rate Limiting

The LLM endpoint has a basic rate limiter.

```
5 requests per minute
```

---

# Error Handling

The API returns standard HTTP responses:

| Code | Meaning              |
| ---- | -------------------- |
| 400  | Invalid input        |
| 401  | Unauthorized         |
| 403  | Forbidden            |
| 404  | Not found            |
| 502  | External API failure |

---

# Assumptions

* Only parents create students
* Only mentors create lessons
* Parents assign students to lessons
* Sessions belong to lessons

---

# Author

Backend Assignment for Mentora.
