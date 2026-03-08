# Mentora Backend Assignment

## Overview

This project implements a simplified backend for a mentorship platform where **Parents, Students, and Mentors** interact.
Parents can create student accounts, mentors can create lessons, and students can be assigned to lessons through a booking system.
The system also includes an **LLM-based text summarization endpoint**.

This backend demonstrates **clean API design, modular architecture, database modeling, authentication, and external API integration**.

---

# Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT Authentication**
* **bcrypt** for password hashing
* **Axios** for external API calls
* **express-rate-limit** for basic API protection
* **Google Gemini API** for text summarization

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
git clone https://github.com/sai-shiva-ram/mentora-backend.git
cd mentora-backend
```

Install dependencies

```
npm install
```

---

# Environment Variables

Create a `.env` file in the project root.

Example configuration:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mentora
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_llm_api_key
```

For security reasons, `.env` is not included in the repository.

---

# Running the Server

Start the development server:

```
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

# Authentication

## Signup

```
POST /auth/signup
```

Example Request:

```
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456",
  "role": "parent"
}
```

Allowed roles:

* parent
* mentor

---

## Login

```
POST /auth/login
```

Response includes a **JWT token** used for authenticated endpoints.

---

# Students

## Create Student (Parent Only)

```
POST /students
```

Headers

```
Authorization: Bearer TOKEN
```

Request Body

```
{
  "name": "Alex",
  "age": 14
}
```

---

## Get Students

```
GET /students
```

Returns all students belonging to the authenticated parent.

---

# Lessons

Mentors can create lessons.

## Create Lesson

```
POST /lessons
```

Example Request

```
{
  "title": "Math Basics",
  "description": "Introduction to Algebra"
}
```

---

# Booking System

Parents assign students to lessons.

```
POST /bookings
```

Example Request

```
{
  "studentId": "STUDENT_ID",
  "lessonId": "LESSON_ID"
}
```

Validation includes:

* Student must exist
* Lesson must exist
* Student must belong to the authenticated parent

---

# Sessions

Each lesson can contain multiple sessions.

## Create Session

```
POST /sessions
```

Example Request

```
{
  "lessonId": "LESSON_ID",
  "date": "2026-03-10",
  "topic": "Linear Equations",
  "summary": "Introduction to solving equations"
}
```

---

## Get Lesson Sessions

```
GET /sessions/lesson/:id
```

Returns all sessions belonging to a lesson.

---

# LLM Text Summarization

## Endpoint

```
POST /llm/summarize
```

Example Request

```
{
"text": "Artificial intelligence is transforming industries including healthcare, finance, education, and transportation..."
}
```

Example Response

```
{
  "summary": "...",
  "model": "gemini-2.0-flash"
}
```

---

# Validation Rules

| Condition            | Response |
| -------------------- | -------- |
| Missing text         | 400      |
| Text < 50 characters | 400      |
| Text too large       | 413      |

---

# Rate Limiting

To prevent abuse, the LLM endpoint has a simple rate limiter:

```
5 requests per minute
```

---

# Error Handling

Standard HTTP error responses are used:

| Status | Meaning                    |
| ------ | -------------------------- |
| 400    | Invalid request            |
| 401    | Unauthorized               |
| 403    | Forbidden                  |
| 404    | Resource not found         |
| 502    | External LLM service error |

---

# Assumptions

* Students are always created by parents.
* Only mentors can create lessons.
* Parents assign students to lessons.
* Sessions are associated with lessons.

---

# Future Improvements

* Role-based authorization middleware
* Pagination for lessons and sessions
* Booking conflict detection
* Session attendance tracking
* Notification system

---

# Author

Backend assignment implementation for Mentora.

---

# Notes

Environment variables should not be committed to the repository.
Use `.env.example` as a template for required configuration.
