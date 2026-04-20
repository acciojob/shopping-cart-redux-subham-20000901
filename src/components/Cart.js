import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  applyCoupon,
} from "../State/cartSlice";

const Cart = ({ products }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  const discount = useSelector((state) => state.cart.discount);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const finalPrice = total - (total * discount) / 100;
  return (
    <div>
      <h3>Cart</h3>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map((item) => (
        <div key={item.id} className="custom-card card">
          <div className="card-body">
            <h4> {item.name}</h4>
            <p> {item.price}</p>
            <p>Qty:{item.quantity}</p>

            <button className="btn" onClick={() => dispatch(increaseQty(item))}>
              +
            </button>
            <button className="btn" onClick={() => dispatch(decreaseQty(item))}>
              -
            </button>

            <button
              className="btn"
              onClick={() => dispatch(removeFromCart(item))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
      <h3>Discount: {discount}%</h3>
      <h3>Final: ₹{finalPrice}</h3>

      <input
        type="text"
        placeholder="Enter Coupon"
        onBlur={(e) => dispatch(applyCoupon(e.target.value))}
      />
    </div>
  );
};

export default Cart;
