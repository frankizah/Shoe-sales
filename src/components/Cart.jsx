import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"; // 👈 Add this

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const img_url = "https://frankizah.pythonanywhere.com/static/images/";
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + Number(item.product_cost), 0);
    setTotalCost(total);
  }, [cartItems]);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const proceedToCheckout = () => {
    navigate("/makepayment", { state: { totalCost } });
  };

  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center text-primary">Your Shopping Cart</h3>

        {cartItems.length > 0 ? (
          <>
            <h5 className="text-center text-success">
              Total: <span className="fw-bold">{totalCost} KES</span>
            </h5>

            <div className="text-center mb-4">
              <button className="btn btn-danger me-3" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="btn btn-success" onClick={proceedToCheckout}>
                Proceed to Checkout
              </button>
            </div>

            <div className="row g-4">
              {cartItems.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={img_url + item.product_photo}
                      alt={item.product_name}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.product_name}</h5>
                      <p className="text-warning fw-bold">{item.product_cost} KES</p>
                      <button
                        className="btn btn-outline-danger mt-2"
                        onClick={() => removeItem(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-muted">Your cart is empty.</p>
        )}
      </div>
      <Footer /> {/* 👈 Add Footer at the bottom */}
    </>
  );
};

export default Cart;
