# ✦ TaskFlow — To Do App

A full-stack **To Do application** built with **Node.js, Express, MongoDB & EJS** with full CRUD operations.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

---

## 📸 Preview

> A clean, dark-themed task manager with full Create, Read, Update & Delete functionality.

---

## 🚀 Features

- ✅ **Create** — Add tasks with title, description & status
- 📋 **Read** — View all tasks with live stats (Total / Pending / Completed)
- ✏️ **Update** — Inline edit any task without leaving the page
- 🗑️ **Delete** — Remove tasks with confirmation
- 🎨 **Beautiful UI** — Dark theme with smooth animations
- 📱 **Responsive** — Works on mobile and desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Frontend | EJS (Embedded JavaScript Templates) |
| Styling | Pure CSS (Dark Theme) |
| Other | method-override, cookie-parser |

---

## 📁 Project Structure

```
To Do app/
│
├── connections/
│   └── task.js          # MongoDB connection
│
├── controllers/
│   └── task.js          # CRUD logic
│
├── middleware/
│   └── auth.js          # Auth middleware
│
├── models/
│   └── task.js          # Mongoose schema
│
├── routes/
│   ├── staticrouter.js  # GET / (fetch all tasks)
│   └── task.js          # POST, PUT, DELETE routes
│
├── views/
│   └── tasks.ejs        # Main UI template
│
├── index.js             # Entry point
├── package.json
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Shahidkhan-0708/To-Do-app.git
cd To-Do-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Make sure MongoDB is running
```bash
# If using local MongoDB
mongod
```

### 4. Start the server
```bash
npm start
# or with nodemon
nodemon index.js
```

### 5. Open in browser
```
http://localhost:3000
```

---

## 📌 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Get all tasks |
| POST | `/tasks/add` | Create new task |
| PUT | `/tasks/:id` | Update task by ID |
| DELETE | `/tasks/:id` | Delete task by ID |

---

## 🗄️ Task Model

```js
{
  title:       String (required),
  description: String,
  Status:      String (required),  // Pending, In Progress, Completed
  timestamps:  true
}
```

---

## 🧑‍💻 Author

**Shahid Khan**
- GitHub: [@Shahidkhan-0708](https://github.com/Shahidkhan-0708)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
