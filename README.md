# **GREATEST COOKIES ON EARTH and SPREADING LOVE!!**

# Technical Specification: Triple T Cookies

This document outlines the specific programming technologies and libraries integrated into the React front-end.

## 1. Core Architecture
* **React 18+**: Utilizing Functional Components and the Composition model.
* **Vite**: Frontend tooling for Hot Module Replacement (HMR) and optimized production builds.

## 2. State & Logic Management
* **React Hooks**:
    * `useState`: Manages UI states (e.g., inventory countdown, modal toggles).
    * `useEffect`: Orchestrates the "Sunday Drop" timer and side effects.
* **date-fns**: 
    * *Purpose*: Calculating time remaining until the next Sunday at 8:00 AM.
    * *Functionality*: Used for `formatDistance`, `isSunday`, and `nextSunday` helpers.

## 3. Styling & Design System
* **Tailwind CSS**: 
    * Custom `tailwind.config.js` extension for brand colors (`#FFC6C5`, `#F3BC7B`, etc.).
    * Mobile-first responsive design.
* **clsx & tailwind-merge**: 
    * *Purpose*: Preventing style conflicts when conditionally applying Tailwind classes.
* **Lucide React**: 
    * Tree-shakable SVG icons (ShoppingBag, Cookie, Clock).

## 4. Navigation & Routing
* **react-router-dom**: 
    * `BrowserRouter`: Enables client-side routing.
    * `Routes` / `Route`: Maps URL paths to specific page components.

## 5. Development Workflow (DevOps)
* **Git/GitHub**: Branch-based development (`feature/` branch naming convention).
* **ESLint/Prettier**: Enforcing code quality and consistent formatting within the IDE.
* **Vercel/Netlify**: CI/CD pipeline for automated front-end deployments.

---
