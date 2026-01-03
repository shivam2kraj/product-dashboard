import { expect } from "vitest";
import favoritesReducer, {
  addFavorite,
  removeFavorite,
} from "../../features/favorites/favoritesSlice";

describe("favoritesSlice", () => {
  test("should return initial state", () => {
    expect(favoritesReducer(undefined, { type: "" })).toEqual({
      items: [],
    });
  });

  test("should add favorite", () => {
    const product = { id: 1, title: "Product" };
    const state = favoritesReducer(undefined, addFavorite(product));

    expect(state.items.length).toBe(1);
    expect(state.items[0]).toEqual(product);
  });

  test("should not add duplicate favorites", () => {
    const product = { id: 1, title: "Product" };
    const initialState = { items: [product] };

    const state = favoritesReducer(initialState, addFavorite(product));
    expect(state.items.length).toBe(1);
  });

  test("should remove favorite", () => {
    const initialState = { items: [{ id: 1 }] };
    const state = favoritesReducer(initialState, removeFavorite(1));

    expect(state.items.length).toBe(0);
  });
});
