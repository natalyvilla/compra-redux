import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import "../styles/Product.css";

const Product = ({ id, name, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ id, name, price }));
  };

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={addToCart}>Agregar al carrito-redux</button>
    </div>
  );
};

export default Product;
