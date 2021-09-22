import { useState, createContext } from "react";

// const [stateContext, setStateContext] = useState(categories);

// const categories = [
//   { name: "Tools", id: "tools" },
//   { name: "Accesories", id: "accesories" },
// ];

export const cartContext = createContext([]);

export default function CartContextProvider({ children }) {
  const [CartList, setCartList] = useState([]);
  function addToCart(item) {
    setCartList(item);
  }

  return (
    <cartContext.Provider value={{ CartList, addToCart }}>
      {children}
    </cartContext.Provider>
  );
}
