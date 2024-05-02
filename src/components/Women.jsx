import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import '../styles/Women.css'

export default function Women() {
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
        
       {category==="" && <ProductDetails category={category} />}
       {category==="Ethnic Wear" && <ProductDetails category={category} />}
       {category==="Western Wear" && <ProductDetails category={category} />}
       {category==="Footwear" && <ProductDetails category={category} />}
       {category==="Accessories" && <ProductDetails category={category} />}

      </div>
    </div>
  );
}
