import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { setSearch } from "../features/filters/filtersSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const debouncedSearch = useDebounce(value, 500);

  // ✅ Correct hook for side-effect
  useEffect(() => {
    dispatch(setSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      className="border rounded p-2 w-full"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
