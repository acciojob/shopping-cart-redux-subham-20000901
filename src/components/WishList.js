import React from 'react';
import { addToCart,removeFromWishlist} from '../State/cartSlice';
import { useSelector,useDispatch } from 'react-redux';


const WishList = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.cart.wishlist)
 
   return (
  <div>

    <nav className="navbar navbar-expand-lg">
      <div className="text-center">
        <h3>Shopping Cart</h3>
      </div>
    </nav>

    <ProductList products={products} />
    <Cart />
    <Wishlist />

  </div>
);
}

export default WishList;
