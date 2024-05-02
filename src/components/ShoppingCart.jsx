import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const [shoppingCartProducts, setShoppingCartProducts] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return products
      .filter((product) => cart.includes(product.id))
      .map((product) => ({ ...product, quantity: 1 }));
  });

  const handleQuantityChange = (productId, type) => {
    const updatedShoppingCart = shoppingCartProducts.map((product) => {
      if (product.id === productId) {
        const updatedQuantity =
          type === "increment" ? product.quantity + 1 : product.quantity - 1;
        return { ...product, quantity: Math.max(updatedQuantity, 1) };
      }
      return product;
    });
    setShoppingCartProducts(updatedShoppingCart);
  };

  const handleRemoveFromShoppingCart = (productId) => {
    const updatedShoppingCart = shoppingCartProducts.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedShoppingCart.map((product) => product.id))
    );
    setShoppingCartProducts(updatedShoppingCart);
  };

  const calculateTotalAmount = () => {
    return shoppingCartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    console.log(shoppingCartProducts);
    localStorage.setItem("cart-items",  JSON.stringify(shoppingCartProducts));
    navigate("/payment");
  }

  return (
    <div className="flex flex-row justify-center items-start mt-10 px-6">
      <div className="w-full md:w-3/4">
        <h2 className="text-3xl font-semibold mb-4">My Shopping Cart</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shoppingCartProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <ProductCard product={product} />
              <div className="flex justify-between items-center p-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() =>
                      handleQuantityChange(product.id, "decrement")
                    }
                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleQuantityChange(product.id, "increment")
                    }
                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none"
                  >
                    +
                  </button>
                </div>
                <div
                  className="text-red-600 cursor-pointer"
                  onClick={() => handleRemoveFromShoppingCart(product.id)}
                >
                  Remove
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/4 md:pl-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
          <table className="w-full mb-4">
            <tbody>
              {shoppingCartProducts.map((product) => (
                <tr key={product.id}>
                  <td className="py-2">
                    {product.name}{" "}
                    <span className="font-semibold">
                      {product.quantity > 1 && `${product.quantity}`}
                    </span>
                  </td>
                  <td className="py-2 text-right">
                   ₹{product.price * product.quantity}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-gray-200">
                <td className="py-2 font-semibold">Total Amount:</td>
                <td className="py-2 text-right font-semibold">
                ₹{calculateTotalAmount()}
                </td>
              </tr>
            </tbody>
          </table>
          <button className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
