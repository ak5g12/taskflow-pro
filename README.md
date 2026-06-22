# TaskFlow Pro

TaskFlow Pro is a modern Kanban-style task management web application built using **HTML, CSS, and Vanilla JavaScript**.  
It helps users organize tasks efficiently using a visual workflow system (To Do → In Progress → Done).

---

## Live Demo

👉 https://ak5g12.github.io/taskflow-pro/

---

## Features

- Create and manage tasks easily
- Kanban board layout with 3 workflow stages:
  - To Do
  - In Progress
  - Done
- Move tasks between stages
- Delete tasks when completed
- Real-time task statistics (Total & Completed)
- Data persistence using Local Storage
- Fully responsive design for all devices
- Clean and modern UI (Glassmorphism style)

---

## Tech Stack

- HTML5
- CSS3 (Flexbox + Grid + Modern UI Styling)
- JavaScript (Vanilla JS)
- Local Storage API

---

## ⚙️ How It Works

- Each task is stored as an object with a unique ID and status
- Task status controls which column it appears in
- DOM is dynamically updated based on task changes
- Local Storage is used to persist data in the browser

---

## ⚠️ Important Note (Data Storage Behavior)

- This project uses **browser Local Storage**
- Data is saved **locally on the same browser and device**
- Tasks remain available even after page refresh

⚠️ However:
- Data is NOT shared across different devices or systems
- If you open this project on another device or browser, it will start with a fresh (empty) task list
- No backend or database is connected in this version

