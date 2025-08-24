"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300" style={{ backgroundImage: "url('bb.avif')", backgroundSize: "cover" }}>
      <h1 className="text-4xl font-bold mb-6 text-gray-500">About Us</h1>
      <p className="text-lg text-gray-100 max-w-2xl text-center mb-6 font-mono bg-amber-600/opacity rounded-lg">
      We Serve you with Quality wear that makes you look good and feel comfortable.
      </p>
      <button
        onClick={() => router.push("/products")}
        className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-lg shadow-md transition"
      >
        Go to Products
      </button>
    </div>
  );
}
