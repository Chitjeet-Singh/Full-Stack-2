# Experiment 5B: React Lazy Loading & Code Splitting with Routing

## Overview
This experiment demonstrates **lazy loading and code splitting** in React applications using dynamic imports and route-based code splitting. The project showcases how to optimize application performance by loading components only when they're needed.

## What We Did
We created a React application that implements:
- **Multiple Pages** - Dashboard, Profile, and Settings pages
- **Lazy Loading Component** - A loading indicator displayed while components are being loaded
- **Route-Based Code Splitting** - Each route loads its component dynamically
- **Performance Optimization** - Reduces initial bundle size by splitting code

## How We Did It

### Technology Stack
- **React** - JavaScript library with lazy() and Suspense for code splitting
- **Vite** - Modern build tool with optimized code splitting support
- **React Router** - Dynamic routing with lazy component loading
- **ESLint** - Code quality enforcement
- **CSS** - Styling for responsive UI and loading states

### Development Process
1. **Project Setup** - Initialized React with Vite for fast builds and HMR
2. **Page Structure** - Created separate page components (Dashboard, Profile, Settings)
3. **Lazy Loading** - Implemented React.lazy() for dynamic imports
4. **Loading Component** - Built a Loading component using Suspense fallback
5. **Optimization** - Configured Vite for optimal code splitting

### Key Features
- Dynamic imports with React.lazy() for code splitting
- Suspense component with custom Loading fallback
- Route-based lazy loading for better performance
- Reduced initial bundle size
- Faster page load times
- Hot module replacement during development

## Screenshots

### Home Page
![Landing Page](./expB_homepage.png)

### About Page
![Landing Page](./expB_aboutpage.png)

### About Page
![Landing Page](./expB_contactpage.png)

### Lazy Loading State
![Lazy Loading](./expB_loading.png)

