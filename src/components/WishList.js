import React from 'react';
import { addToCart,removeFromWishlist} from '../State/cartSlice';
import { useSelector,useDispatch } from 'react-redux';


const WishList = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.cart.wishlist)
 
    return (
    <div>
        <h2>WishList</h2>

        {wishlist.map((item) => (
            <div key={item.id}>
             <p>{item.name}</p>
             <p>{item.price}</p>
             <button onClick={()=>dispatch(addToCart(item))}>Add To Cart</button>
             <button onClick={() =>dispatch(removeFromWishlist(item))}>Remove from Wishlist</button>
            </div>
        ))
        }
      
    </div>
  )
}

export default WishList;
