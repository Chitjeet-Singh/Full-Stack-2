# Experiment 2: React Router with Navigation Links

## Overview
This project demonstrates React Router with interactive navigation links. It includes a dashboard landing page, user profile section with animated welcome message, and button-based navigation between pages.

## Features
- **Dashboard** - Main landing page
- **Profile Page** - User profile with animated welcome message and profession details
- **Navigation Buttons** - Interactive links to navigate between pages
- **Animated Marquee** - Scrolling welcome message on profile page

## Tech Stack
- React
- React Router DOM
- Vite
- JavaScript
- HTML5 Marquee

## Project Structure
```
src/
├── App.jsx          - Main App component with routes and navigation
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
- `/profile` - User Profile with animated welcome
- `/dashboard` - Navigation to Dashboard

## Screenshots

### Dashboard
The dashboard features a stunning purple-pink gradient background with a welcoming message and project tracking card.

![Dashboard](exp-2-dashboard.png)

### Profile Page
The profile page includes an animated marquee welcome message, professional details, and a glassmorphism bio card showcasing "M.Devasis Singh - Full Stack Developer".

![Profile Page](exp-2-profile.png)

## Key Components
- `Dashboard` - Landing page component
- `Profile` - Profile page with marquee animation and user information
- Navigation links with styled buttons for page transitions

## Learning Objectives
- Using React Router Link component for navigation
- Implementing page-to-page navigation with buttons
- Adding animations with HTML5 marquee element
- Creating interactive user interface elements
