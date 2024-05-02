import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
const Sidebar = ({
  products,
  handleSetBrand,
  handleSetPrice,
  handleSetSize,
  brand,
  handleFilters,
  price,
  size,
}) => {
  const [pricelist, setPriceList] = useState([
    ...new Set(products.map((prd) => prd.price)),
  ]);
  const [brandlist, setBrandList] = useState([
    ...new Set(products.map((prd) => prd.brand)),
  ]);
  const [sizelist, setSizeList] = useState([
    ...new Set(products.map((prd) => prd.size)),
  ]);
  const [priceVis, setPriceVis] = useState(false);
  const [sizeVis, setSizeVis] = useState(false);
  const [brandVis, setBrandVis] = useState(false);

  return (
    <div className="pl-5 w-72 mr-5 min-w-72 mt-8 border-r-2 border-gray-300 pr-5 h-screen">
      <h2 className="text-4xl pb-2">Filters</h2>
      <div>
        <div
          className="pt-3 text-xl font-semibold font-thin"
          onClick={() => setPriceVis(!priceVis)}
        >
          Price
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </div>
        {priceVis &&
          pricelist.map((pr) => (
            <div
              key={pr}
              className={`cursor-pointer hover:bg-gray-200 rounded-md p-2 ${
                price.includes(pr) ? "bg-blue-200" : ""
              }`}
              onClick={() => handleSetPrice(pr)}
            >
              {pr}

              {price.includes(pr)}
            </div>
          ))}
      </div>
      <div
        className="pt-3 text-xl font-semibold font-thin"
        onClick={() => setBrandVis(!brandVis)}
      >
        Brands
        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
      </div>
      <div>
        {brandVis &&
          brandlist.map((pr) => (
            <div
              key={pr}
              className={`cursor-pointer hover:bg-gray-200 rounded-md p-2 ${
                brand.includes(pr) ? "bg-blue-200" : ""
              }`}
              onClick={() => handleSetBrand(pr)}
            >
              {pr}

              {brand.includes(pr)}
            </div>
          ))}
      </div>
      <div
        className="pt-3 text-xl font-semibold justify-between"
        onClick={() => setSizeVis(!sizeVis)}
      >
        <span className="font-light">Size</span>
        <span>
          <KeyboardArrowDownIcon />
        </span>
      </div>
      <div>
        {sizeVis &&
          sizelist.map((pr) => (
            <div
              key={pr}
              className={`cursor-pointer hover:bg-gray-200 rounded-md p-2 ${
                size.includes(pr) ? "bg-blue-200" : ""
              }`}
              onClick={() => handleSetSize(pr)}
            >
              {pr}

              {size.includes(pr)}
            </div>
          ))}
      </div>
      <button
        className="text-lg px-4 py-2 mt-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
        onClick={handleFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

function ProductDetails({ category }) {
  const products = useSelector((state) => state.products);
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([]);
  const [size, setSize] = useState([]);
  const gender = window.location.pathname.split("/")[1];
  console.log(gender);
  const handleSetBrand = (b) => {
    if (brand.includes(b)) {
      setBrand(brand.filter((br) => br !== b));
    } else {
      setBrand([...brand, b]);
    }
  };

  const handleSetPrice = (p) => {
    if (price.includes(p)) {
      setPrice(price.filter((pr) => pr !== p));
    } else {
      setPrice([...price, p]);
    }
    console.log(price);
  };

  const handleSetSize = (s) => {
    if (size.includes(s)) {
      setSize(size.filter((sz) => sz !== s));
    } else {
      setSize([...size, s]);
    }
  };

  const [genderProducts, setGenderProducts] = useState(
    products.filter((prd) => prd.gender === gender)
  );
  const [filteredProducts, setFilteredProducts] = useState(genderProducts);
  useEffect(() => {
    if (category !== "") {
      setFilteredProducts(
        genderProducts.filter((prd) => prd.category === category)
      );
    }
  }, [category]);

  const handleFilters = () => {
    let current = genderProducts;
    if (price.length !== 0) {
      current = current.filter((product) => price.includes(product.price));
    }
    if (brand.length !== 0) {
      current = current.filter((product) => brand.includes(product.brand));
    }
    if (size.length !== 0) {
      current = current.filter((product) => size.includes(product.size));
    }
    if (category !== "") {
      current = current.filter((prd) => prd.category === category);
    }
    setFilteredProducts(current);
    console.log(filteredProducts, brand, size, price);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start mt-10 px-6 md:px-0">
      <Sidebar
        price={price}
        size={size}
        brand={brand}
        handleSetBrand={handleSetBrand}
        handleSetPrice={handleSetPrice}
        handleSetSize={handleSetSize}
        handleFilters={handleFilters}
        products={products}
      />

      <div className="flex flex-col w-full md:w-4/5">
        <h2 className="text-4xl font-bold pb-4"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 cursor-pointer"
              onClick={() => {
                window.location.href = `http://localhost:3000/product/${product.id}`;
              }}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-gray-700 mb-2">₹{product.price}</p>
                <div className="flex items-center justify-between"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
