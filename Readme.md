# 🎬 VideoApp Backend

A production-ready backend for a modern video-sharing platform, built with **Node.js**, **Express.js**, and **MongoDB**. The application provides secure authentication, media management, user interactions, and scalable REST APIs following industry-standard backend practices.

---

## 📖 Overview

VideoApp Backend powers the core functionality of a video streaming platform by providing APIs for user authentication, video management, subscriptions, playlists, comments, likes, and watch history. The project is designed with a modular architecture to ensure scalability, maintainability, and ease of development.

---

## ✨ Features

* 🔐 JWT-based Authentication & Authorization
* 👤 User Registration, Login & Profile Management
* 🎥 Video Upload, Update & Deletion
* ☁️ Cloudinary Integration for Media Storage
* ❤️ Like & Unlike Videos
* 💬 Comment Management
* 📺 Channel Subscription System
* 📂 Playlist Creation & Management
* 🕒 Watch History Tracking
* 🔒 Password Encryption with Bcrypt
* ⚡ RESTful API Design
* 📁 Modular Folder Structure
* ❌ Centralized Error Handling

---

## 🛠️ Tech Stack

| Category          | Technologies |
| ----------------- | ------------ |
| Runtime           | Node.js      |
| Framework         | Express.js   |
| Database          | MongoDB      |
| ODM               | Mongoose     |
| Authentication    | JWT          |
| Password Security | bcrypt       |
| File Upload       | Multer       |
| Cloud Storage     | Cloudinary   |
| Environment       | dotenv       |

---

## 📂 Project Structure

```
src
├── controllers
├── db
├── middlewares
├── models
├── routes
├── utils
├── constants
├── app.js
└── index.js
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/videoapp-backend.git
```

### Navigate to the project

```bash
cd videoapp-backend
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the root directory.

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

### Start the development server

```bash
npm run dev
```

---

## 📌 API Modules

* Authentication
* Users
* Videos
* Comments
* Likes
* Playlists
* Subscriptions
* Dashboard
* Watch History

---

## 🔒 Security

* JWT Authentication
* Encrypted Password Storage
* Protected Routes
* Input Validation
* Secure Environment Variables
* Centralized Error Handling

---

## 🚀 Future Enhancements

* Video Search & Filtering
* Video Recommendations
* Notifications
* Real-time Chat
* Live Streaming Support
* Analytics Dashboard

---

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## 📄 License

This project is intended for educational and portfolio purposes.
