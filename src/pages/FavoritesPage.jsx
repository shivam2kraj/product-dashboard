import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { removeFavorite } from "../features/favorites/favoritesSlice";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  if (favorites.length === 0) {
    return <p className="p-6 text-gray-600">No favorite products yet.</p>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Favorites</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favorites.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard product={product} />
            <button
              onClick={() => dispatch(removeFavorite(product.id))}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
