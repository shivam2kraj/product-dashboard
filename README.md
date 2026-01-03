Product Dashboard

A modern, scalable product dashboard built with React, Redux Toolkit, and Vite, demonstrating clean state management, performant UI patterns, and comprehensive testing practices.

The application consumes product data from the Fake Store API and provides a complete product browsing experience including search, filtering, sorting, favorites management, and detailed product views.

Overview

The Product Dashboard is designed as a real-world frontend architecture example.
It focuses on:

Predictable state management using Redux Toolkit

Optimized rendering using memoized selectors

Clean separation of concerns

Testable, maintainable code structure

Responsive, production-ready UI patterns

Features
Product Listing Page

Responsive, grid-based product layout

Debounced search by product title

Category-based filtering

Price-based sorting (ascending and descending)

Optimized rendering using memoization

Product Detail Page

Dedicated product view with full information

Ability to add or remove products from favorites

State synced across the application

Favorites Page

View all favorited products

Remove products from favorites

Persistent state within the session

State Management Architecture

Redux Toolkit is used to manage application state in a modular and scalable way.

Redux Slices

Products Slice
Handles product data, loading states, and API errors

Filters Slice
Manages search input, category selection, and sorting logic

Favorites Slice
Maintains the list of favorited products

Async Handling

API calls are implemented using Redux Thunks

Loading and error states are handled centrally

Selectors are memoized for performance optimization

Testing Strategy

The project includes a structured testing approach to ensure reliability and maintainability.

Unit Tests

Redux slices

Reducers and actions

Selector logic

Component Tests

UI components rendering

User interactions

Controlled inputs and events

Integration Tests

End-to-end user flows

Search, filter, and favorite interactions

Mocked API responses to isolate frontend behavior

Project Structure
src/
 ├── api/
 ├── app/
 │     └── store.js
 ├── components/
 │     ├── ProductCard.jsx
 │     ├── ProductGrid.jsx
 │     ├── SearchBar.jsx
 │     ├── FilterBar.jsx
 │     └── Loader.jsx
 ├── features/
 │     ├── products/
 │     │      ├── productsSlice.js
 │     │      ├── productsThunks.js
 │     │      └── productsSelectors.js
 │     ├── favorites/
 │     │      └── favoritesSlice.js
 │     └── filters/
 │            └── filtersSlice.js
 ├── hooks/
 │     └── useDebounce.js
 ├── pages/
 │     ├── ProductListingPage.jsx
 │     ├── ProductDetailPage.jsx
 │     └── FavoritesPage.jsx
 ├── tests/
 │     ├── slices/
 │     ├── components/
 │     └── integration/
 ├── App.jsx
 └── index.js

Installation and Setup
Clone the Repository
git clone <https://github.com/shivam2kraj/product-dashboard>
cd product-dashboard

Install Dependencies
npm install

Start the Development Server
npm run dev


The application will be available at:

http://localhost:5173

API

All product data is fetched from:

https://fakestoreapi.com/products

Running Tests

Generate a coverage report:

npm run test -- --coverage


The coverage output will be generated in:

/coverage

Technology Stack

React (Functional Components and Hooks)

Redux Toolkit

Redux Thunks

React Router DOM

Tailwind CSS

Jest

React Testing Library

Vite

Responsive Design

The application follows a mobile-first approach and adapts seamlessly across:

Mobile devices

Tablets

Desktop screens

The layout uses a grid-based system and flexible components to ensure consistent behavior across screen sizes.

Purpose

This project serves as:

A reference implementation of Redux Toolkit best practices

A demonstration of frontend architectural skills

A portfolio-ready example of testing-driven React development