import { useBasket } from "../context/BasketContext";

function Basket() {
  const { basket, addToBasket, removeFromBasket } = useBasket();
  const total = basket.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-[1500px] mx-auto px-6 pt-12 pb-14">
      <h1 className="font-semibold text-[32px] text-[#0F172A] tracking-tight mb-6">
        Basket
      </h1>
      {/* condition ? valueIfTrue : valueIfFalse */}
      {basket.length === 0 ? (
        <p className="text-[#475569]">Your basket is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {basket.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-4 flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain rounded-xl bg-[#f0f9ff] p-2"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-[#0F172A]">{item.name}</h3>
                <p className="text-[#475569] text-[13px]">£{item.price} each</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => removeFromBasket(item.id)}
                  className="bg-slate-100 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold text-[#0F172A] cursor-pointer"
                >
                  -
                </button>
                <span className="font-semibold w-4 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => addToBasket(item)}
                  className="bg-[#2563EB] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
                >
                  +
                </button>
              </div>
              <span className="font-bold text-[#0F172A] w-20 text-right">
                £{(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <div className="flex justify-end mt-6 border-t border-[#E2E8F0] pt-6">
            <div className="text-right">
              <p className="text-[#475569] text-[14px]">Total</p>
              <p className="font-bold text-[28px] text-[#0F172A]">
                £{total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
