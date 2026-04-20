import React from "react";
import "./../styles/App.css";
import Cart from "./Cart";
import ProductList from "./ProductList";
import WishList from "./WishList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const products = [
    { id: 1, name: "Shirt", price: 200 },
    { id: 2, name: "Jeans", price: 800 },
    { id: 3, name: "watch", price: 1000 },
  ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="text-center w-100">
          <h3>Shopping Cart</h3>
        </div>
      </nav>

      <ProductList products={products} />
      <Cart />
      <WishList />
      

    </div>
  );
};

export default App;
