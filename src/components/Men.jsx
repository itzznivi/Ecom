import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
export default function Men() {
  const [category, setCategory] = useState("");

  const handleSetCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="women-container">
       <div className="sidebar">
        <div className="details-section">
          <p onClick={() => handleSetCategory("Ethnic Wear")}>Ethnic Wear</p>
          <p onClick={() => handleSetCategory("Western Wear")}>Western Wear</p>
          <p onClick={()=> handleSetCategory("Footwear")}>Footwear</p>
          <p onClick={()=> handleSetCategory("Accessories")}>Accessories</p>
        </div>
      </div>

       <div className="product-details">
        <ProductDetails category={category} />
      </div>
    </div>
  );
}
