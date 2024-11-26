import React from "react";
import Product from "./components/Product";
import Cart from "./components/Cart";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Tienda</h1>
      <div className="products">
        <Product id={1} name="Pijama" price={40.0} />
        <Product id={2} name="Camiseta" price={20.0} />
        <Product id={3} name="Zapato" price={120.0} />
      </div>
      <Cart />
    </div>
  );
};

export default App;
