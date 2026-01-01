<p align="center">
  <img src="./src/assets/images/lendsqr-logo.png" width="300" />
</p>

# Lendsqr Front-End Engineering Assessment

This repository contains the codes for the client side of the Lendsqr front-end engineering assessment

## Table of Contents
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)

## Technologies Used
- React.js + Vite - A modern React setup powered by Vite for fast development, instant hot module replacement, and optimized production builds.

- TypeScript - Adds static typing to JavaScript, improving code reliability, readability, and developer experience by catching errors early.

- SCSS (Sass) - A CSS preprocessor that enables cleaner, more maintainable styling through variables, nesting, mixins, and modular structure.
  
- Axios - A promise-based HTTP client used for making API requests, handling request/response interception, and managing errors efficiently.
  
- React Query (TanStack Query) - A powerful data-fetching and state management library for server state, providing caching, background refetching, synchronization, and improved performance.

- React Router - Handles client-side routing, enabling seamless navigation between pages without full page reloads.

- Sonner - A modern, customizable toast notification library for displaying feedback and alerts in React applications.

- date-fns - A lightweight utility library for formatting, parsing, and manipulating dates in a simple and immutable way.
  
- Vite Plugin SVGR - Transforms SVG files into reusable React components, allowing SVGs to be styled and controlled via props.
  
- React Icons - A lightweight library for easily rendering popular icon sets as React components.

- Vercel - A cloud platform used for deploying and hosting the application with fast global delivery and seamless CI/CD integration.

- GitHub - Used for version control, collaboration, and source code management.

## Project Structure

```bash
public/
├─ logo.svg                # Lendsqr logo for meta information

src/
├─ api/                    # API configuration and endpoints
│  ├─ axios.ts             # Axios instance setup
│  └─ users.ts             # User-related API requests

├─ assets/                 # Static assets
│  ├─ fonts/               # Custom font files
│  └─ images/              # Icons and image assets

├─ components/             # Reusable UI components
│  ├─ Input.tsx
│  └─ dashboard/           # Dashboard-specific components
│     ├─ Header.tsx
│     ├─ Sidebar.tsx
│     ├─ Users.tsx
│     ├─ UserDetails.tsx
│     └─ users/             # User-related dashboard components
│        ├─ Pagination.tsx
│        ├─ UsersFilter.tsx
│        ├─ UsersStats.tsx
│        ├─ UsersTable.tsx
│        ├─ UserInfoSection.tsx
│        └─ UserGeneralDetails.tsx

├─ pages/                  # Application pages
│  ├─ DashboardLayout.tsx
│  └─ Login.tsx

├─ scss/                   # SCSS styles (modular & scoped)
│  ├─ dashboardlayout.module.scss
│  ├─ input.module.scss
│  ├─ login.module.scss
│  └─ dashboard/
│     ├─ header.module.scss
│     ├─ sidebar.module.scss
│     ├─ pagination.module.scss
│     └─ users/
│        ├─ users.module.scss
│        ├─ users.table.module.scss
│        ├─ users.filter.module.scss
│        ├─ users.details.module.scss
│        └─ user.general.details.module.scss

├─ store/                  # State management & data fetching
│  └─ queries/
│     └─ users.ts           # React Query user queries

├─ types/                  # TypeScript type definitions
│  ├─ userFilter.ts
│  ├─ userLists.ts
│  └─ userStats.ts

├─ utils/                  # Utility functions and constants
│  ├─ sidebarTabs.tsx
│  ├─ userTabs.tsx
│  ├─ userTableHeaders.ts
│  ├─ custom-hooks/         # Reusable custom hooks
│  │  ├─ useClickOutside.ts
│  │  └─ usePagination.ts
│  └─ dummy-data/           # Mock user stats data for development
│     └─ userStats.ts

├─ App.tsx                 # Root application component
├─ main.tsx                # Application entry point
├─ index.scss              # Global styles
├─ PrivateRoute.tsx        # Protected route logic
├─ PageNotFound.tsx        # 404 page
└─ vite-env.d.ts           # Vite environment types
```

## Getting Started
- Follow the steps below to run the project locally.

### Prerequisites
- Make sure you have the following installed on your machine:
* Node.js (v18 or later recommended)
* npm (comes with Node.js)
* Git

- You can verify your setup by running:
` node -v
npm -v
git --version
`

### Installation
1. 

## Screenshots


