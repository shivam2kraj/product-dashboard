import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { setSearch } from "../features/filters/filtersSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const debouncedSearch = useDebounce(value, 500);

  useEffect(() => {
    dispatch(setSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <input
      type="text"
      placeholder="Search products by name..."
      className="
        w-full rounded-lg border border-gray-300
        px-4 py-2 text-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      "
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

