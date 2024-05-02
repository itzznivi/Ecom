import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DisplayCard from "./DisplayCard";

const PaymentPage = () => {
  const [customerDetails, setCustomerDetails] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [hide, setHide] = useState(false);
  const [paymentMode, setPaymentMode] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({});
  const [order, setOrder] = useState([]);
  const cases = [
    "Customer Details",
    "Payment Mode",
    "Payment Details",
    "Order Summary",
  ];
  const [total, setTotal] = useState(0);
  const [curIndex, setCurIndex] = useState(0);
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };
  useEffect(() => {
    const handleCart = async () => {
      setCartItems(await JSON.parse(localStorage.getItem("cart-items")));
    };
    handleCart();
  }, []);
  const handleCases = (n) => {
    if (n == 1 && !validate()) {
      alert("Fill all the details");
      return;
    }
    console.log(paymentDetails);
    if (curIndex + n >= 0 && curIndex + n <= 3) {
      setCurIndex(curIndex + n);
      setTotal(calculateTotalAmount());
    }
  };
  const validate = () => {
    if (curIndex === 0) {
      console.log(customerDetails.fullName);
      if (
        customerDetails.fullName === undefined ||
        customerDetails.email === undefined
      ) {
        return false;
      }
      return true;
    }
    if (curIndex === 1) {
      if (!paymentMode) {
        return false;
      }
      return true;
    }
    if (curIndex === 2) {
      if (paymentMode === "Credit Card") {
        if (
          !paymentDetails.name ||
          !paymentDetails.exp ||
          !paymentDetails.cvv ||
          !paymentDetails.cardNumber
        ) {
          return false;
        }
        return true;
      }
      if (paymentMode === "COD") return true;
      if (paymentMode === "UPI") {
        if (!paymentDetails.upiId) {
          return false;
        }
        return true;
      }
    }
    return true;
  };
  const handlePaymentSubmit = () => {
    console.log("Payment submitted:", {
      customerDetails,
      paymentMode,
      paymentDetails,
      order,
    });
    setHide(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {!hide && (
        <div className="p-4 border border-gray-300 rounded-md shadow-md ">
          <h1 className="text-3xl font-bold mb-4 justify-between items-center w-[100%]">Payment for Products</h1>
          <div className="flex justify-between gap-20">
           
            {cases.map((cs, ind) => (
              <div key={ind} className="flex justify-center items-center">
                {ind < curIndex ? (
                  <CheckCircleIcon />
                ) : (
                  <CheckCircleOutlineIcon />
                )}
                <p>{cs}</p>
              </div>
            ))}
          </div>
          {curIndex === 0 && (
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">Customer Details</h2>

              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
                value={customerDetails?.fullName}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    fullName: e.target.value,
                  })
                }
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
                value={customerDetails?.email}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    email: e.target.value,
                  })
                }
              />
            </div>
          )}

          {curIndex === 1 && (
            <div className="mb-4 ">
              <h2 className="text-lg font-medium mb-2">Payment Mode</h2>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  
                  checked={paymentMode === "Credit Card"}
                  onChange={() => setPaymentMode("Credit Card")}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2">Credit Card</span>
              </label>{" "}
              <br />
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={paymentMode === "COD"}
                  onChange={() => setPaymentMode("COD")}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2">Cash on delivery(COD)</span>
              </label>
              <br />
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={paymentMode === "UPI"}
                  onChange={() => setPaymentMode("UPI")}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2">UPI payment</span>
              </label>
            </div>
          )}

          {curIndex === 2 && (
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">Payment Details</h2>

              {paymentMode === "UPI" && (
                <input
                  type="text"
                  placeholder="UPI@id"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      upiId: e.target.value,
                    })
                  }
                />
              )}
              {paymentMode === "Credit Card" && (
                <div>
                  <input
                    type="text"
                    placeholder="Name on Card"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        name: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="mm/yy"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        exp: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="cvv"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        cvv: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        cardNumber: e.target.value,
                      })
                    }
                  />
                </div>
              )}
            </div>
          )}

          {curIndex === 3 && (
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">Order</h2>
              <ul>
                {cartItems.map((p) => (
                  <li className="flex justify-between font-semibold text-xl">
                    <p>
                      {p.name} X{p.quantity}
                    </p>{" "}
                    <p> Rs.{p.price * p.quantity}</p>
                  </li>
                ))}
                <li className="flex justify-between">
                  <p>Total: </p>
                  <p className=" font-bold text-2xl">Rs.{total}</p>
                </li>
              </ul>

              <button
                type="button"
                onClick={handlePaymentSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
              >
                Pay Now
              </button>
            </div>
          )}
          {!hide && (
            <div className="flex justify-between">
              <button
                onClick={() => handleCases(-1)}
                className={`bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600 ${
                  curIndex === 0 ? "bg-gray-500 hover:bg-gray-600" : ""
                }`}
                type="button"
              >
                Previous
              </button>
              <button
                onClick={() => handleCases(1)}
                className={`bg-blue-500 font-medium py-2 px-4  text-white rounded-md hover:bg-blue-600 ${
                  curIndex === 3 ? "bg-gray-500 hover:bg-gray-600" : ""
                }`}
                type="button"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
      {hide && (
        <div className="bg-white p-6 rounded-md shadow-md">
          <div className="mb-4">
            <div className="flex justify-center items-center border rounded-md bg-purple-700">
              <h3 className="text-lg font-medium mb-2 text-2xl text-white ">
                Order Summary
              </h3>
            </div>
            <br />
            <ul className="flex flex-col gap-5 justify-start items-start">
              {cartItems.map((p) => (
                <DisplayCard product={p} />
              ))}
            </ul>

            <div className="flex justify-between items-center w-[100%]">
              <p className="mt-2">Total Amount:</p>{" "}
              <p className="text-2xl font-bold">Rs.{total}</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Payment Details</h3>
            <p>Payment Method: Credit Card</p>
            <p>Card Number: XXXX-XXXX-XXXX-1234</p>
          </div>

          <p style={{color:"green"}}>
            Your order has been placed successfully. Thank you for shopping with us!
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
