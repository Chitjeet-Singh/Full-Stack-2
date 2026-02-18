# Experiment 3: Advanced React Router Navigation

## Overview
This project demonstrates a more advanced routing setup with multiple dashboard-like pages. It includes a dashboard, user profile, and settings page with clean route-based architecture.

## Features
- **Dashboard** - Main landing page with dashboard content
- **Profile Page** - User profile section
- **Settings Page** - Application settings page
- **Multi-page Navigation** - Client-side routing between different sections

## Tech Stack
- React
- React Router DOM
- Vite
- JavaScript

## Project Structure
```
src/
├── App.jsx          - Main App component with routes
├── main.jsx         - Entry point
├── App.css          - Application styles
├── index.css        - Global styles
└── assets/          - Static assets
```

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Routes
- `/` - Dashboard Page
- `/profile` - User Profile Page
- `/settings` - Settings Page

## Screenshots

### Dashboard
The dashboard showcases a deep blue gradient background with cyan-green accents, featuring a "Quick Stats" card with glassmorphism effects.

![Dashboard](exp3_dashboard.png)

### Profile Page
The profile page displays professional information for "M.Devasis - Full Stack Developer | Tech Enthusiast" in an elegant card layout with smooth animations.

![Profile](exp3_profile.png)

## Key Components
- `Dashboard` - Main dashboard component
- `Profile` - User profile component

## Learning Objectives
- Building applications with multiple route-based pages
- Organizing components in a router structure
- Implementing clean and scalable routing architecture
- Managing application state across multiple pages
