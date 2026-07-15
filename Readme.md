# 🎥 VideoApp Backend

A scalable backend API for a modern video-sharing platform built using Node.js, Express.js, and MongoDB. It provides secure authentication, video management, user interactions, and media handling through RESTful APIs.

## 🚀 Features

- User Authentication (JWT)
- User Registration & Login
- Video Upload & Management
- Cloud Media Storage
- Like & Dislike Videos
- Comments System
- Subscribe / Unsubscribe Channels
- Playlist Management
- Watch History
- Secure Password Management
- RESTful API Architecture

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Cloudinary
- Multer

## 📁 Project Structure

```
src/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── db/
├── app.js
└── index.js
```

## ⚙️ Installation

```bash
git clone <repository-url>

cd videoapp-backend

npm install

npm run dev
```

## 🔐 Environment Variables

Create a `.env` file and configure the following variables:

```env
PORT=
MONGODB_URI=

ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=

REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## 📌 API Modules

- Authentication
- Users
- Videos
- Comments
- Likes
- Playlists
- Subscriptions
- Dashboard
- Watch History

## 📄 License

This project is built for learning and educational purposes.
