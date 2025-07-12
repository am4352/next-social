# 📱 SRM Social 

**Social Media Platform** built using:

- **Next.js** (App Router)
- **Prisma ORM**
- **MySQL**
- **Clerk Authentication**
- **Ngrok** for sharing local server

This project helps you understand modern web app development with secure authentication, relational database integration, and local server tunneling for live testing or collaboration.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Environment Variables (.env.local)](#environment-variables-envlocal)
- [Getting Started](#getting-started)
- [Clerk Setup](#clerk-setup)
- [MySQL & Prisma Setup](#mysql--prisma-setup)
- [Ngrok Setup](#ngrok-setup)
- [Usage](#usage)
- [Prisma Schema](#prisma-schema)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)
- [Disclaimer](#disclaimer)

---

## 📖 About the Project

This is a **social media** platform where users can sign up, log in (via Clerk), and create short posts. It uses Prisma for database operations and MySQL as the relational DB. With Ngrok, you can easily expose your local server to the public web — perfect for demos or webhook testing.

---

## ✅ Features

- 🔐 Authentication with Clerk (sign up/login/logout)
- 📝 Post creation with author reference
- 📚 Relational schema with Prisma & MySQL
- 📡 API endpoints for posts and user data
- 🌐 Ngrok tunneling to expose localhost
- 💡 Modular structure for easy expansion

---

## ⚙️ Tech Stack

| Layer        | Technology              |
|--------------|--------------------------|
| Frontend     | Next.js (App Router)     |
| Backend      | Next.js API Routes       |
| ORM          | Prisma                   |
| Auth         | Clerk                    |
| Database     | MySQL                    |
| Tunneling    | Ngrok                    |
| Language     | TypeScript / JavaScript  |

---


---

## 🛠️ Environment Variables (`.env.local`)

Create a file called `.env.local` in the root directory and add the following:

```env
# Database connection string
DATABASE_URL="mysql://username:password@localhost:3306/databasename"

# Clerk Authentication keys
CLERK_SECRET_KEY=your-clerk-secret-key
CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key



