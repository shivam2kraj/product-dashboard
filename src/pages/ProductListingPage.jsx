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

    list.sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );

    return list;
  }, [products, search, category, sort]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Products
        </h1>
        <p className="text-gray-500 mt-1">
          Browse and manage available products
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-4 space-y-4">
        <SearchBar />
        <FilterBar />
      </div>

      {/* Content */}
      {status === "loading" && <Loader />}
      {status === "succeeded" && (
        <ProductGrid products={filteredProducts} />
      )}
      {status === "failed" && (
        <p className="text-red-500">Error loading products.</p>
      )}
    </div>
  );
}

