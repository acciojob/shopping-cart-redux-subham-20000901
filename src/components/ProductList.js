import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../State/cartSlice";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div className="custom-card card" key={product.id}>
         <div className="card-body">
          <h5>{product.name}</h5>
          <p>{product.price}</p>
          <button 
           className="btn btn-primary"
           onClick={() => dispatch(addToCart(product))}
           >
            Add To Cart
          </button>
          <button 
           className="btn btn-secondary"
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
