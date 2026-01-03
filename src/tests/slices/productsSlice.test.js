import { expect } from "vitest";
import productsReducer from "../../features/products/productsSlice";
import { fetchProducts } from "../../features/products/productsThunks";

describe("productsSlice", () => {

  test("should return initial state", () => {
    const state = productsReducer(undefined, { type: "" });
    expect(state).toEqual({
      items: [],
      status: "idle",
      error: null,
    });
  });

  test("should handle fetchProducts.pending", () => {
    const state = productsReducer(undefined, fetchProducts.pending());
    expect(state.status).toBe("loading");
  });

  test("should handle fetchProducts.fulfilled", () => {
    const mockData = [{ id: 1, title: "Test Product" }];
    const state = productsReducer(undefined, fetchProducts.fulfilled(mockData));
    expect(state.items.length).toBe(1);
    expect(state.status).toBe("succeeded");
  });

  test("should handle fetchProducts.rejected", () => {
    const state = productsReducer(undefined, fetchProducts.rejected());
    expect(state.status).toBe("failed");
    expect(state.error).toBe("Failed to fetch products");
  });
});
