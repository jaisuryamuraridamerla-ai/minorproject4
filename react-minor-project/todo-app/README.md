# Taskly – To-Do App

## Project Overview
A responsive task manager built with React. Users can add, edit, complete and delete tasks, give them due dates, and filter by status. Tasks are saved in the browser so they survive a refresh.

## Features Implemented
- Add new tasks (with optional due date)
- Mark tasks as completed / pending
- Edit tasks inline (Enter to save, Esc to cancel)
- Delete tasks and clear all completed tasks
- Status badge on every task (Completed / Pending)
- Filter: All, Pending, Completed (with counts)
- Due dates with overdue highlighting
- Progress bar
- Local Storage persistence
- Responsive layout for mobile and desktop

## Technologies Used
React 18, Vite, JavaScript (ES6+), CSS3, Local Storage

## Project Structure
```
src/
  components/   Header, TaskForm, FilterBar, TaskList, TaskItem
  utils/        date helpers
  assets/
  App.jsx       state + logic
  main.jsx      entry file
  index.css / App.css
```

## Setup Instructions
```bash
npm install
npm run dev
```
Requires Node.js 18+.

## Screenshots
_Add screenshots here (optional)._
