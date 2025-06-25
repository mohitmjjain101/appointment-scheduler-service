# 🗓️ Appointment Scheduler Service

A Node.js backend service to handle user authentication and appointment scheduling, built with Express, MongoDB, JWT, and bcrypt.

---

## 📂 Project Structure

server/<br>
├── config/<br>
│ └── Db.js # MongoDB connection config<br>
├── controller/<br>
│ ├── appointmentController.js<br>
│ └── authController.js # Authentication logic<br>
├── middleware/<br>
│ └── authMiddleware.js # JWT auth check<br>
├── model/<br>
│ ├── Appointment.js<br>
│ └── User.js # Mongoose models<br>
├── routes/<br>
│ ├── appointmentRoute.js<br>
│ └── authRoute.js<br>
├── .env # Environment variables<br>
├── package.json<br>
├── server.js # Entry point<br>

## 🛠️ Tech Stack

- **Node.js** (ES modules)
- **Express**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)**
- **bcryptjs**
- **dotenv**
- **CORS**

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/mohitmjjain101/appointment-scheduler-service
cd appointment-scheduler-service
```

### 2. Install Depedencies

```
npm install
```

### 3. Configure env file in root folder (refer env.example)

MONGODB_URL=MONGODB_URL
JWT_SECRET=JWT_SECRET
PORT=3001

### 4. Start the Server

```
# For production
npm start

# For development with auto-restart
npm run dev
```