import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favorites/favoritesSlice";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === product.id);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // ✅ IMPORTANT (stop card click)
    if (isFavorite) dispatch(removeFavorite(product.id));
    else dispatch(addFavorite(product));
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="border p-4 rounded cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />

      <h2 className="font-semibold text-lg line-clamp-2">
        {product.title}
      </h2>

      <p className="text-gray-700 mt-1 font-medium">
        ${product.price}
      </p>

      <button
        onClick={toggleFavorite}
        className={`mt-3 px-4 py-2 rounded ${
          isFavorite ? "bg-red-500 text-white" : "bg-gray-200"
        }`}
      >
        {isFavorite ? "Remove Favorite" : "Add to Favorites"}
      </button>
    </div>
  );
}
