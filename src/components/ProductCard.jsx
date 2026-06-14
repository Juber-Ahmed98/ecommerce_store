import { Link } from "react-router-dom";
import { useBasket } from "../context/BasketContext";

function ProductCard({ id, name, price, image, description }) {
  const { basket, addToBasket, removeFromBasket } = useBasket();

  const item = basket.find((i) => i.id === id);
  const quantity = item ? item.quantity : 0;
  const inBasket = quantity > 0;

  return (
    <Link to={`/products/${id}`} className="block">
      <div
        className={`bg-white border rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-200 hover:shadow-[0_8px_28px_rgba(37,99,235,0.08)] hover:border-[#7DD3FC] ${
          inBasket
            ? "border-[#2563EB] ring-2 ring-[#2563EB]/30"
            : "border-[#E2E8F0]"
        }`}
      >
        {/* image container */}
        <div className="aspect-square bg-gradient-to-br from-[#eff6ff] to-[#f0f9ff] flex items-center justify-center p-6">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        {/* Text section */}
        <div className="px-[18px] pt-4 pb-5 flex flex-col gap-1 flex-1">
          <h3 className="font-semibold text-[17px] text-[#0F172A]">{name}</h3>
          <p className="text-[13px] text-[#475569] min-h-[36px] mb-2 flex-1">
            {description}
          </p>
          <div className="flex items-center justify-between mt-1">
            <span className="font-bold text-[18px] text-[#0F172A]">
              £{price}
            </span>

            {/* If not in basket: show the + button. If in basket: show the stepper */}
            {inBasket ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromBasket(id);
                  }}
                  className="bg-[#E2E8F0] text-[#0F172A] rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
                >
                  −
                </button>
                <span className="font-semibold text-[15px] text-[#0F172A] w-5 text-center">
                  {quantity}
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToBasket({ id, name, price, image, description });
                  }}
                  className="bg-[#2563EB] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToBasket({ id, name, price, image, description });
                }}
                className="bg-[#2563EB] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
