import Navbar from "./components/Navbar";
// import second from './components/'
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "@mui/material";
import Men from "./components/Men";
import Women from "./components/Women";
import ProductDetails from "./components/ProductDetails";
import React from "react";
import ProductPage from "./components/ProductPage";
import WishList from "./components/WishList";
import ShoppingCart from "./components/ShoppingCart";
import PaymentPage from "./components/PaymentPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/payment" element={<PaymentPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;