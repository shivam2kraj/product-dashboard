Product Dashboard

A modern, responsive product dashboard built using React, Redux Toolkit, Thunks, and Testing Libraries.
The application fetches product data from the Fake Store API, supports search, filter, sorting, and favorites management, and includes comprehensive unit + integration tests.

# Features
## Product Listing Page

Responsive product grid

Debounced search by title

Filter by category

Sort by price (Low → High / High → Low)

## Product Detail Page

Full product information

Add / Remove from favorites

## Favorites Page

View all favorited products

Remove favorites

## State Management

Redux Toolkit slices for:

Products

Filters

Favorites

Async thunks for API calls

Memoized selectors

## Testing

Unit tests for slices

Component tests for UI

Integration tests for full workflow

## Project Structure
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

## Installation & Setup
1️⃣ Clone the Repo
git clone <your-repo-url>
cd product-dashboard

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev


The app will run at:

http://localhost:5173

🔌 API Used

All product data comes from:

👉 https://fakestoreapi.com/products

🧪 Running Tests

Run all unit + integration tests:

npm run test


To view test coverage:

npm run test -- --coverage


Coverage report will appear in:

/coverage

🧱 Technologies Used

React (Hooks + Functional Components)

Redux Toolkit

Redux Thunks

React Router DOM

Tailwind CSS

Jest

React Testing Library

Vite

📱 Responsive Design

Mobile-first layout

Grid-based product listing

Fully responsive on desktop, tablet, and mobile

🧩 Testing Summary
✔ Unit Tests

productsSlice

filtersSlice

favoritesSlice

✔ Component Tests

ProductCard

SearchBar

✔ Integration Tests

Search → Filter → Favorite workflow

Mocked API responses