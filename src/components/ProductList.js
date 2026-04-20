import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../State/cartSlice";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {products.map((product) => (
        <div className="custom-card" key={product.id}>
         <div className="card-body">

          <h3>{product.name}</h3>

          <p>{product.price}</p>

          <button 
           className="btn btn-primary add-to-cart"
           onClick={() => dispatch(addToCart(product))}
           >
            Add To Cart
          </button>

          <button 
           className="btn wishlist-btn"
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
