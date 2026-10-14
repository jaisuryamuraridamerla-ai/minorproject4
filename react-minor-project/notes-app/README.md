# Jotter – Notes App

## Project Overview
A responsive note-taking app built with React. Create, edit and delete notes, organise them by category, search them, and see when each was created or last edited. Notes persist in the browser.

## Features Implemented
- Create, edit and delete notes (one reusable form handles create + edit)
- Notes shown in a responsive card grid
- Search by title or content
- Categories (Personal, Work, Study, Ideas) with category filter
- Created / edited timestamps
- Local Storage persistence
- Responsive layout for mobile and desktop

## Technologies Used
React 18, Vite, JavaScript (ES6+), CSS3, Local Storage

## Project Structure
```
src/
  components/   Header, NoteForm, SearchBar, CategoryFilter, NoteGrid, NoteCard
  utils/        constants + date formatting
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
