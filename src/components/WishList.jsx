import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { MdClose } from "react-icons/md";

const WishList = () => {
  const products = useSelector((state) => state.products);
  const [wishlistedProducts, setWishlistedProducts] = useState(() => {
    const wishes = JSON.parse(localStorage.getItem("wishlist") || "[]");
    return products.filter((product) => wishes.includes(product.id));
  });

  const handleRemoveFromWishlist = (productId) => {
    const updatedWishlist = wishlistedProducts.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist.map((product) => product.id))
    );
    setWishlistedProducts(updatedWishlist);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="text-3xl font-semibold mb-4">My Wishlist</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white transition transform hover:scale-105 cursor-pointer"
            onClick={() => {
              window.location.href = `http://localhost:3000/product/${product.id}`;
            }}
          >
            <ProductCard product={product} />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 focus:outline-none transition"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveFromWishlist(product.id);
              }}
            >
              <MdClose />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
