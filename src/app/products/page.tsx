"use client";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        // ✅ Show all products (remove filter)
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Failed to fetch products: ${err.message}`);
        } else {
          setError("Failed to fetch products");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6" style={{ backgroundImage: "url('bb.avif')", backgroundSize: "cover" }}>
      <h1 className="text-3xl font-bold text-center mb-6 font-serif">PRODUCTS</h1>

      {/* Grid of product cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-600">
              {product.title}
            </h2>
            <p className="mt-2 text-gray-700 font-bold">${product.price}</p>
            <p className="text-gray-600 text-sm">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
