import { useState, createContext, useContext } from "react";

// const [stateContext, setStateContext] = useState(categories);

const cartContext = createContext([]);
export const useCartContext = () => useContext(cartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [qty, setQty] = useState(parseFloat());
  function addToCart(item) {
    setCartList([...cartList, item]);
    setQty(qty);
  }
  console.log(cartList);
  return (
    <cartContext.Provider value={{ cartList, addToCart, qty }}>
      {children}
    </cartContext.Provider>
  );
}
