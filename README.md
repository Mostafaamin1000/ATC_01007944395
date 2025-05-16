# 🎟️ Event Booking System (Backend Only)

> 🏆 This backend project was created for a competition organized by **Areeb**, aiming to showcase backend development skills in a clear and structured way.  
> It is designed to be understandable even by non-technical reviewers.

This project is a **Node.js ES6 backend-only application** for managing event bookings. It provides an API that allows users to register, log in, browse events, make bookings, and manage their accounts. Admins can manage users, events, and all bookings through the API.

---

## 🚀 Features

### 👤 Authentication
- User registration and login
- Change and reset passwords
- Input validation for secure and structured data
- Role-based permissions (User / Admin)

### 📅 Events
- Admins can create, update, and soft-delete events
- Events support image uploads
- Users can browse all available events

### 🧾 Bookings
- Users can book available events
- Admins can view all bookings
- Users can manage their own bookings

### 👥 Users
- Admins can update or delete users
- All users can view their account information

---

## 🛡️ Security & Structure

- Protected routes with **JWT authentication**
- **Role-based access control** using custom middleware
- Input **validation middleware** for safe data handling
- Image upload support via middleware
- Clean project structure with modular routing

---

## 📡 API Endpoints Overview

### 🔐 Authentication Routes

| Endpoint                          | Method | Description                        | Access         |
|----------------------------------|--------|------------------------------------|----------------|
| `/api/auth/signup`               | POST   | Register a new user                | Public         |
| `/api/auth/signin`               | POST   | Login as user                      | Public         |
| `/api/auth/changepassword`       | PATCH  | Change user password               | Authenticated  |
| `/api/auth/forget-password`      | POST   | Send reset password email          | Public         |
| `/api/auth/reset-password/:token`| POST   | Reset password using token         | Public         |

---

### 🎟️ Booking Routes

| Endpoint                         | Method | Description                        | Access           |
|----------------------------------|--------|------------------------------------|------------------|
| `/api/booking/create`           | POST   | Create a new booking               | User only        |
| `/api/booking/getall`           | GET    | View all bookings                  | Admin only       |
| `/api/booking/:id`              | GET    | Get specific booking by ID         | User only        |
| `/api/booking/update/:id`       | PUT    | Update a booking                   | User or Admin    |
| `/api/booking/delete/:id`       | DELETE | Delete a booking                   | User or Admin    |

---

### 📅 Event Routes

| Endpoint                         | Method | Description                        | Access           |
|----------------------------------|--------|------------------------------------|------------------|
| `/api/event/create`             | POST   | Create a new event with image      | Admin only       |
| `/api/event/`                   | GET    | Get all events                     | User & Admin     |
| `/api/event/`                   | GET    | Get specific event (based on query or logic) | User & Admin |
| `/api/event/update/:id`         | PUT    | Update an event                    | Admin only       |
| `/api/event/delete/:id`         | PUT    | Soft-delete an event               | Admin only       |

---

### 👥 User Routes

| Endpoint                         | Method | Description                        | Access           |
|----------------------------------|--------|------------------------------------|------------------|
| `/api/users`                    | GET    | Get all users                      | Public (can be restricted) |
| `/api/user/:id`                 | GET    | Get specific user by ID            | User or Admin    |
| `/api/update-user/:id`          | PUT    | Update user information            | Admin only       |
| `/api/delete-user/:id`          | DELETE | Delete a user                      | Admin only       |

---

## 🌐 Live Deployment

You can try the deployed backend on **Vercel**:

🔗 [booking-azure.vercel.app](https://booking-azure.vercel.app)

> This is a backend-only project, so you can use tools like **Postman** or **Thunder Client** to test the API endpoints.

---

## 🛠 How to Run the Project Locally

```bash
git clone https://github.com/Mostafaamin1000/ATC_01007944395
cd ATC_01007944395
npm install
npm run dev
