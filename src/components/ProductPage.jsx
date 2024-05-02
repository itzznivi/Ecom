import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, inc } from "../store/index";

const ProductPage = () => {
  const products = useSelector((state) => state.products);
  const [added, setAdded] = useState(false);
  const [wish, setWish] = useState(false);
  const temp = useSelector((state) => state.temp);
  const i = useSelector((state) => state.i);
  const t = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const id = parseInt(productId, 10);
  const product = products.filter((p) => p.id === id)[0];
  const local = JSON.parse(localStorage.getItem("cart"));
  const wishlist = JSON.parse(localStorage.getItem("wishlist"));

  useEffect(() => {
    if (local !== null) {
      setAdded(local.includes(product.id));
    }
    if (wishlist !== null) {
      setWish(wishlist.includes(product.id));
    }
  }, []);

  const addToCart = () => {
    const localCart = localStorage.getItem("cart");
    if (localCart !== null) {
      const cart = JSON.parse(localCart);
      cart.push(product.id);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const newCart = [product.id];
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
    setAdded(true);
  };

  const addToWishlist = () => {
    const localWishlist = localStorage.getItem("wishlist");
    if (localWishlist !== null) {
      const wishlist = JSON.parse(localWishlist);
      wishlist.push(product.id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } else {
      const newWishlist = [product.id];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    }
    setWish(true);
  };

  return (
    <div className="container mx-auto mt-24 p-6 bg-white shadow-md rounded-lg">
      <div className="flex">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-30 h-80 rounded-lg max-h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 px-6 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 mr-2">Price:</span>
            <span className="font-semibold">₹{product.price}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 mr-2">Brand:</span>
            <span className="font-semibold">{product.brand}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 mr-2">Size:</span>
            <span className="font-semibold">{product.size}</span>
          </div>
          <div className="flex justify-between">
            {added ? (
              <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700">
                Added to Cart !
              </button>
            ) : (
              <button
                onClick={addToCart}
                type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  class="w-3.5 h-3.5 me-2 inline"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span class="inline">Buy now</span>
              </button>
            )}
            {wish ? (
              <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Wishlisted !
              </button>
            ) : (
              <button
                onClick={addToWishlist}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 "
              >
                Add to Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
