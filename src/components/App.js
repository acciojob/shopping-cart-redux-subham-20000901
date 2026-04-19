
import React from "react";
import './../styles/App.css';
import Cart from "./Cart";
import ProductList from "./ProductList";
import WishList from "./WishList";

const App = () => {
  const products = [
    {id:1,name:"Shirt",price:200},
    {id:2,name:"Jeans",price:800},
    {id:3,name:"watch",price:1000}
  ];
  return (
    <div>
      <h1>Shopping Cart</h1>
        <ProductList products={products} />
        <WishList />
        <Cart />
    </div>
  )
}

export default App;
