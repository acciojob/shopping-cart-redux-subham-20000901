import React from 'react';
import { addToCart,removeFromWishlist} from '../State/cartSlice';
import { useSelector,useDispatch } from 'react-redux';


const WishList = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.cart.wishlist)
 
    return (
    <div>
        <h3>WishList</h3>

        {wishlist.map((item) => (
            <div className="custom-card card" key={item.id} >
             <div className="card-body">

             <h4>{item.name}</h4>
          
             <button className="btn" onClick={()=>dispatch(addToCart(item))}>Add To Cart</button>
             <button className="btn" onClick={() =>dispatch(removeFromWishlist(item))}>Remove from Wishlist</button>
            </div>
            </div>
        ))
        }
      
    </div>
  )
}

export default WishList;
