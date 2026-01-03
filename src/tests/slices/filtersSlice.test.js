import { expect } from "vitest";
import filtersReducer, {
  setSearch,
  setCategory,
  setSort,
} from "../../features/filters/filtersSlice";

describe("filtersSlice", () => {
  test("should return initial state", () => {
    expect(filtersReducer(undefined, { type: "" })).toEqual({
      search: "",
      category: "all",
      sort: "asc",
    });
  });

  test("should update search", () => {
    const state = filtersReducer(undefined, setSearch("shirt"));
    expect(state.search).toBe("shirt");
  });

  test("should update category", () => {
    const state = filtersReducer(undefined, setCategory("electronics"));
    expect(state.category).toBe("electronics");
  });

  test("should update sort", () => {
    const state = filtersReducer(undefined, setSort("desc"));
    expect(state.sort).toBe("desc");
  });
});
