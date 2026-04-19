import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../State/cartSlice";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add To Cart
          </button>
          <button onClick={() => dispatch(addToWishlist(product))}>
            Add o Wishlist
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
