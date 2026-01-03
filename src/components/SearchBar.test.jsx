import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import SearchBar from "./SearchBar";
import filtersReducer from "../features/filters/filtersSlice";
import { expect } from "vitest";

test("updates search input", () => {
  const store = configureStore({ reducer: { filters: filtersReducer } });

  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  const input = screen.getByPlaceholderText("Search products...");

  fireEvent.change(input, { target: { value: "shirt" } });

  expect(input.value).toBe("shirt");
});
