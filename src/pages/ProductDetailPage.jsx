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

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10 text-center text-gray-500">
        Product not found.
      </div>
    );
  }

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) dispatch(removeFavorite(product.id));
    else dispatch(addFavorite(product));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-white border rounded-2xl shadow-sm p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="bg-gray-50 rounded-xl flex items-center justify-center p-6">
            <img
              src={product.image}
              alt={product.title}
              className="h-80 object-contain transition-transform hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-5">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {product.title}
            </h1>

            <p className="text-2xl font-semibold text-blue-600">
              ${product.price}
            </p>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={handleFavoriteClick}
                className={`
                  px-6 py-3 rounded-lg text-sm font-medium transition
                  ${
                    isFavorite
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }
                `}
              >
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </button>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
