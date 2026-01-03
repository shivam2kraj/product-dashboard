import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favorites/favoritesSlice";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === product.id);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorite) dispatch(removeFavorite(product.id));
    else dispatch(addFavorite(product));
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="
        group bg-white rounded-xl border
        hover:shadow-lg transition cursor-pointer
      "
    >
      {/* Image */}
      <div className="h-48 flex items-center justify-center p-4 bg-gray-50 rounded-t-xl">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain group-hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-sm font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-lg font-bold text-blue-600">
          ${product.price}
        </p>

        <button
          onClick={toggleFavorite}
          className={`
            w-full mt-3 py-2 rounded-lg text-sm font-medium
            transition
            ${
              isFavorite
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }
          `}
        >
          {isFavorite ? "Remove Favorite" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

