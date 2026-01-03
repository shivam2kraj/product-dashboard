import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsThunks";

import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ProductGrid from "../components/ProductGrid";
import Loader from "../components/Loader";

export default function ProductListingPage() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const { search, category, sort } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Apply filtering & search
  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (search.trim()) {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    // Sorting
    list.sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );

    return list;
  }, [products, search, category, sort]);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Products</h1>

      <SearchBar />
      <FilterBar />

      {status === "loading" && <Loader />}
      {status === "succeeded" && (
        <ProductGrid products={filteredProducts} />
      )}
      {status === "failed" && <p>Error loading products.</p>}
    </div>
  );
}
