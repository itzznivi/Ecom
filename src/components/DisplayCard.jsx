import React from 'react';

const DisplayCard = ({ product }) => {
  return (
    <div className="flex justify-between items-center gap-4 border-b pb-4 mb-4 w-[100%]">
      <div className="flex items-center gap-4">
        <img src={product.imageUrl} alt="Product" className="w-20 h-20 rounded-md" />
        <div>
          <p className="text-lg font-semibold">{product.name}</p>
          <p className="text-sm text-gray-600">Brand: {product.brand}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-lg">Rs.{product.price}</p>
        <p className="text-lg mx-2">x</p>
        <p className="text-lg">{product.quantity}</p>
      </div>
    </div>
  );
};

export default DisplayCard;
