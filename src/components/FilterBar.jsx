import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSort } from "../features/filters/filtersSlice";

export default function FilterBar() {
  const dispatch = useDispatch();
  const { category, sort } = useSelector((state) => state.filters);

  return (
    <div className="flex flex-wrap gap-4">
      <select
        value={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        className="
          rounded-lg border border-gray-300 px-4 py-2 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      >
        <option value="all">All Categories</option>
        <option value="men's clothing">Men Clothing</option>
        <option value="women's clothing">Women Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      <select
        value={sort}
        onChange={(e) => dispatch(setSort(e.target.value))}
        className="
          rounded-lg border border-gray-300 px-4 py-2 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      >
        <option value="asc">Price: Low → High</option>
        <option value="desc">Price: High → Low</option>
      </select>
    </div>
  );
}

