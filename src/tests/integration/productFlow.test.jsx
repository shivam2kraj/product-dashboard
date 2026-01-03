import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";

import App from "../../App";
import { store } from "../../app/store";

const mockProducts = [
  { id: 1, title: "Shirt", price: 20, category: "men's clothing", image: "" },
  { id: 2, title: "Laptop", price: 900, category: "electronics", image: "" },
];

beforeAll(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProducts),
    })
  );
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe("Product flow integration", () => {
  it("search filters product list", async () => {
    render(
      <Provider store={store}>
        {/* ❌ NO MemoryRouter here */}
        <App />
      </Provider>
    );

    // Initial load
    expect(await screen.findByText("Shirt")).toBeInTheDocument();

    // Search
    fireEvent.change(
      screen.getByPlaceholderText("Search products..."),
      { target: { value: "Laptop" } }
    );

    // Filtered result
    expect(await screen.findByText("Laptop")).toBeInTheDocument();
  });
});
