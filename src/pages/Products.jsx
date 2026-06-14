import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="max-w-[1500px] mx-auto px-6 pt-12 pb-14">
      <h1 className="font-semibold text-[32px] text-[#0F172A] tracking-tight mb-6">
        Shop products
      </h1>
      <div className="grid grid-cols-3 gap-6 p-8 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
