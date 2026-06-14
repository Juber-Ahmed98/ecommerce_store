import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`http://localhost:3000/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="max-w-[1200px] mx-auto px-6 py-12">Loading…</p>;
  }

  return (
    <div className="max-w-[1500px] mx-auto px-6 pt-12 pb-16">
      <div className="grid grid-cols-2 gap-10 max-[800px]:grid-cols-1">
        {/* LEFT: image */}
        <div className="aspect-square bg-gradient-to-br from-[#eff6ff] to-[#f0f9ff] rounded-2xl flex items-center justify-center p-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* RIGHT: core info */}
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[32px] text-[#0F172A] tracking-tight">
            {product.name}
          </h1>
          <p className="text-[16px] text-[#475569] leading-relaxed">
            {product.description}
          </p>
          <span className="font-bold text-[26px] text-[#0F172A]">
            £{product.price}
          </span>
        </div>
      </div>

      {product.specification && (
        <section className="mt-12">
          <details>
            <summary className="block border-t-2 border-[#E2E8F0] pt-5 pr-5">
              <h2 className="font-semibold text-[20px] text-[#0F172A] mb-2">
                Specification
              </h2>
            </summary>
            <p className="text-[15px] text-[#475569] leading-relaxed">
              {product.specification}
            </p>
          </details>
        </section>
      )}

      {product.how_to_take && (
        <section className="mt-6">
          <details>
            <summary className="block border-t-2 border-[#E2E8F0] pt-5 pr-5">
              <h2 className="font-semibold text-[20px] text-[#0F172A] mb-2">
                How to take
              </h2>
            </summary>
            <p className="text-[15px] text-[#475569] leading-relaxed">
              {product.how_to_take}
            </p>
          </details>
        </section>
      )}

      {product.benefits && (
        <section className="mt-6">
          <details>
            <summary className="block border-t-2 border-[#E2E8F0] pt-5 pr-5">
              <h2 className="font-semibold text-[20px] text-[#0F172A] mb-2">
                Benefits
              </h2>
            </summary>
            <p className="text-[15px] text-[#475569] leading-relaxed">
              {product.benefits}
            </p>
          </details>
        </section>
      )}
    </div>
  );
}

export default ProductDetail;
