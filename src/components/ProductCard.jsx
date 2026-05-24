function ProductCard({ name, price, image, description }) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-200 hover:shadow-[0_8px_28px_rgba(37,99,235,0.08)] hover:border-[#7DD3FC]">
      {/* image container */}
      <div className="aspect-square bg-gradient-to-br from-[#eff6ff] to-[#f0f9ff] flex items-center justify-center p-6">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>
      {/* Text section */}
      <div className="px-[18px] pt-4 pb-5 flex flex-col gap-1">
        <h3 className="font-semibold text-[17px] text-[#0F172A]">{name}</h3>
        <p className="text-[13px] text-[#475569] min-h-[36px] mb-2">
          {description}
        </p>
        <div className="flex items-center justify-between mt-1">
          <span className="font-bold text-[18px] text-[#0F172A]">£{price}</span>
          <button className="bg-[#2563EB] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
