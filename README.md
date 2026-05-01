# 🚀 MERN CRM Full Stack Application

A full-stack **Customer Relationship Management (CRM)** application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
This project demonstrates user authentication, CRUD operations, API integration, and responsive UI design.

---

## 📌 Features

### 🔐 Authentication

* User Registration with password hashing (bcrypt)
* Secure Login with JWT token
* Protected routes using middleware

### 🧑‍💼 CRM (Customer Management)

* Add new customers
* View all customers
* Update customer details
* Delete customers

### ⚙️ Backend Features

* RESTful API design
* Modular structure (Controllers, Routes, Middleware)
* MongoDB integration using Mongoose
* Input validation and error handling

### 🎨 Frontend Features

* React + Vite setup
* Tailwind CSS for styling
* Responsive UI design
* API integration using Axios
* React Router for navigation

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt.js

---

## 📁 Project Structure

```
mern-crm-fullstack/
│
├── client/              # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/              # Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── app.js
│
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/YOUR_USERNAME/mern-crm-fullstack.git
cd mern-crm-fullstack
```

---

### 2️⃣ Backend Setup

```
cd server
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd client
npm install
npm run dev
```

---

## 🔗 API Endpoints

### Authentication

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user

### Customers

* `GET /api/customers` → Get all customers
* `POST /api/customers` → Create customer
* `PUT /api/customers/:id` → Update customer
* `DELETE /api/customers/:id` → Delete customer

---

## 🧪 Testing

Use **Postman** to test APIs:

* Register → Login → Get Token
* Use token in headers for protected routes

Example header:

```
Authorization: your_token_here
```

---

## 🎯 Learning Outcomes

* Built full-stack MERN application
* Implemented authentication & authorization
* Practiced REST API development
* Learned modular backend architecture
* Integrated frontend with backend APIs

---

## 📸 Demo (Add Screenshot or Video)

👉 Add your screen recording video link here

---

## 📦 GitHub & Version Control

* Proper commits maintained
* Clean folder structure
* Well-documented code

---

## 👨‍💻 Author

**Karthik B**

---

## ⭐ Acknowledgement

This project was developed as part of a **Full Stack Development MERN Assignment** to demonstrate practical implementation of backend and frontend integration.

---

## 🚀 Future Improvements

* Add search & filtering
* Add pagination
* Role-based authentication
* Deploy on cloud (Render / Vercel)

---
