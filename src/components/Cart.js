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
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map((item) => (
        <div div key={item.id}>
          <p> {item.name}</p>
          <p> {item.price}</p>
          <button onClick={() => dispatch(increaseQty(item))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item))}>-</button>

          <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
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
