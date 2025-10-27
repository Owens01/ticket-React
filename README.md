# 🌀 Trackit — React Ticket & Task Management App

Trackit is a responsive, modern ticket and task management interface built with React 18, Vite, Typescript and Tailwind CSS .  
It provides a seamless experience for creating, tracking, and updating tickets in real-time — all stored locally in the browser for simplicity and speed.

---

## Project Overview

###  Landing Page and Dashboard

A lightweight React single-page interface featuring:

- Clean landing page with hero section and decorative SVGs  
- Task/Ticket dashboard for managing items  
- Local state persistence using the browser’s `localStorage`  
- Modular component structure for scalability  

---

###  Functional Ticket Management

 this stage adds:

- **Dynamic Ticket System:** Create, edit, and delete tasks with automatic updates.  
- **Persistent State:** All tickets are saved using `localStorage`.  
- **Priority & Status Controls:** Each ticket includes priority levels (`low`, `medium`, `high`) and status options (`open`, `in_progress`, `closed`).  
- **Reusable Components:** Cards, modals, and UI parts are fully modular.  

---

## New Features (Stage 1)

✅ Persistent tickets using local storage  
✅ Component-based structure with state isolation  
✅ TypeScript type safety for tickets and UI logic  
✅ Responsive and accessible layout with Tailwind  
✅ Lightweight, dependency-efficient build via Vite  
✅ Inline SVG decorative shapes for scalability and theming  
✅ Modular CSS file powered by Tailwind layers  
✅ Configurable store using Pinia-style or Zustand-like logic  

---

## Page Details

### Landing Page
A responsive entry view containing:

- Hero text introducing TaskTide  
- Decorative inline SVG shapes overlapping the hero section  
- Responsive layout using Tailwind’s grid and flex utilities  
- Optional navigation links for future pages (e.g., Dashboard, About)

---

### Dashboard
The main interface for managing tickets.

Displays all tickets from `localStorage`, with options to:

| Action | Description |
|---------|-------------|
| **Create Ticket** | Adds a new entry with title, description, and priority |
| **Update Ticket** | Edit title, status, or priority in place |
| **Delete Ticket** | Removes ticket from the local list |
| **Auto-Save** | All changes persist immediately |

---

## Frameworks & Libraries Used

| Category | Library | Purpose |
|-----------|----------|----------|
| **Frontend Framework** | [React 18](https://react.dev/) | Core component architecture |
| **Build Tool** | [Vite](https://vitejs.dev/) | Fast bundler and dev server |
| **Styling Framework** | [Tailwind CSS 4.1.16](https://tailwindcss.com/) | Utility-first CSS framework |
| **Icons** | [Lucide React](https://lucide.dev/) | Lightweight SVG icons |
| **Type System** | [TypeScript](https://www.typescriptlang.org/) | Strong typing and intellisense |
| **Linting/Formatting** | [ESLint + Prettier](https://eslint.org/) | Code quality and consistency |

---


