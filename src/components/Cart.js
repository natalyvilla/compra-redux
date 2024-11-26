import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/cartSlice";
import "../styles/Cart.css";

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras-redux</h2>
      <p>Total de productos: {totalQuantity}</p>
      <p>Total a pagar: ${totalPrice.toFixed(2)}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${item.totalPrice.toFixed(2)}
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
