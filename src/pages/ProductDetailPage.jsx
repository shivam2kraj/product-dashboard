import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favorites/favoritesSlice";
import { selectProductById } from "../features/products/productsSelectors";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(selectProductById(id));
  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = favorites.some((item) => item.id === Number(id));

  if (!product) return <p className="p-6">Product not found.</p>;

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // ✅ stop bubbling

    if (isFavorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-contain"
        />

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl font-semibold text-green-600">
            ${product.price}
          </p>
          <p className="text-gray-600">{product.description}</p>

          <button
            onClick={handleFavoriteClick}
            className={`px-4 py-2 rounded text-white ${
              isFavorite ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
