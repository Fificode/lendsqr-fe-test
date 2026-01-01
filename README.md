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
├───public
│       logo.svg
│
└───src
    │   App.tsx
    │   index.scss
    │   main.tsx
    │   PageNotFound.tsx
    │   PrivateRoute.tsx
    │   vite-env.d.ts
    │
    ├───api
    │       axios.ts
    │       users.ts
    │
    ├───assets
    │   ├───fonts
    │   │       AvenirNext-Bold.otf
    │   │       AvenirNext-Medium.otf
    │   │       AvenirNext-Regular.otf
    │   │
    │   └───images
    │           activate-user.svg
    │           active-users.svg
    │           all-users.svg
    │           arrow-back.svg
    │           arrow-down.svg
    │           arrow-left.svg
    │           arrow-right.svg
    │           avatar.png
    │           badge-percent.svg
    │           bell.svg
    │           blacklist-user.svg
    │           briefcase.svg
    │           calendar.svg
    │           chart-bar.svg
    │           clipboard-list.svg
    │           coins-solid.svg
    │           coins.svg
    │           decision.svg
    │           dropdown-profile.svg
    │           ellipsis.svg
    │           filter.svg
    │           galaxy.svg
    │           guarantors.svg
    │           home.svg
    │           karma.svg
    │           lendsqr-logo.png
    │           loan-request.svg
    │           money-sack.svg
    │           piggy-bank.svg
    │           react.svg
    │           savings-product.svg
    │           scroll.svg
    │           search.svg
    │           sign-in-illustration-removebg.png
    │           sign-in-illustration.png
    │           sign-out.svg
    │           sliders.svg
    │           star-fill.svg
    │           star-outline.svg
    │           tire.svg
    │           transaction.svg
    │           user-cog.svg
    │           user-friends.svg
    │           user.svg
    │           users-loan.svg
    │           view.svg
    │           whitelist.svg
    │
    ├───components
    │   │   Input.tsx
    │   │
    │   └───dashboard
    │       │   Header.tsx
    │       │   Sidebar.tsx
    │       │   UserDetails.tsx
    │       │   Users.tsx
    │       │
    │       └───users
    │               Pagination.tsx
    │               UserGeneralDetails.tsx
    │               UserInfoSection.tsx
    │               UsersFilter.tsx
    │               UsersStats.tsx
    │               UsersTable.tsx
    │
    ├───pages
    │       DashboardLayout.tsx
    │       Login.tsx
    │
    ├───scss
    │   │   dashboardlayout.module.scss
    │   │   input.module.scss
    │   │   login.module.scss
    │   │
    │   └───dashboard
    │       │   header.module.scss
    │       │   pagination.module.scss
    │       │   sidebar.module.scss
    │       │
    │       └───users
    │               user.general.details.module.scss
    │               users.details.module.scss
    │               users.filter.module.scss
    │               users.module.scss
    │               users.table.module.scss
    │
    ├───store
    │   └───queries
    │           users.ts
    │
    ├───types
    │       userFilter.ts
    │       userLists.ts
    │       userStats.ts
    │
    └───utils
        │   sidebarTabs.tsx
        │   userTableHeaders.ts
        │   userTabs.tsx
        │
        ├───custom-hooks
        │       useClickOutside.ts
        │       usePagination.ts
        │
        └───dummy-data
                userStats.ts

## Getting Started

## Screenshots


