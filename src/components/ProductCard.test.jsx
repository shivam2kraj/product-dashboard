import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

import ProductCard from "./ProductCard";
import favoritesReducer from "../features/favorites/favoritesSlice";

function renderWithProviders(ui) {
  const store = configureStore({
    reducer: {
      favorites: favoritesReducer,
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter>
        {ui}
      </MemoryRouter>
    </Provider>
  );
}

describe("ProductCard", () => {
  it("renders product card", () => {
    const product = {
      id: 1,
      title: "Test Product",
      price: 100,
      image: "",
    };

    renderWithProviders(<ProductCard product={product} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  it("adds product to favorites", () => {
    const product = {
      id: 1,
      title: "Test Product",
      price: 100,
      image: "",
    };

    renderWithProviders(<ProductCard product={product} />);

    // ✅ MATCH EXACT TEXT
    fireEvent.click(screen.getByText("Add to Favorites"));

    expect(
      screen.getByText("Remove Favorite")
    ).toBeInTheDocument();
  });
});
