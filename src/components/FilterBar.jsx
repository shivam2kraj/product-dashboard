import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSort } from "../features/filters/filtersSlice";

export default function FilterBar() {
  const dispatch = useDispatch();
  const { category, sort } = useSelector((state) => state.filters);

  return (
    <div className="flex flex-wrap items-center gap-4 mt-4">
      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        className="border px-3 py-2 rounded"
      >
        <option value="all">All Categories</option>
        <option value="men's clothing">Men Clothing</option>
        <option value="women's clothing">Women Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      {/* Sort Filter */}
      <select
        value={sort}
        onChange={(e) => dispatch(setSort(e.target.value))}
        className="border px-3 py-2 rounded"
      >
        <option value="asc">Price: Low → High</option>
        <option value="desc">Price: High → Low</option>
      </select>
    </div>
  );
}
