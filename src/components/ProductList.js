import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../State/cartSlice";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {products.map((product) => (
        <div className="custom-card card">
          <div className="card-body">
            <h4>{product.name}</h4>
            <p>{product.price}</p>

            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>

            <button
              className="btn"
              onClick={() => dispatch(addToWishlist(product))}
            >
              Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
