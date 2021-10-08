import { useState, createContext, useContext } from "react";

export const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (newItem, totalQty) => {
    let itemIndex = [];
    itemIndex = cartList.findIndex(
      (product) => newItem.item.id === product.newItem.item.id
    );

    if (itemIndex === -1) {
      setCartList((cartList) => [...cartList, { newItem, totalQty }]);
    } else {
      let changeCart = [...cartList];
      changeCart[itemIndex].newItem.totalQty += newItem.totalQty;
      setCartList(changeCart);
    }
  };

  const deleteItemFromCart = (product) => {
    const deleteItem = cartList.filter(
      (itemToDel) => itemToDel.newItem.item.id !== product.newItem.item.id
    );

    setCartList([...deleteItem]);
  };

  const iconCart = () => {
    return cartList.reduce(
      (accum, value) => parseInt(accum + value.newItem.totalQty),
      0
    );
  };

  const clearAllCart = () => {
    if (window.confirm("You are cleaning the whole cart. Are you sure?")) {
      setCartList([]);
    }
  };

  const orderFinished = () => {
    setCartList([]);
  };

  const totalPrice = () => {
    return cartList.reduce(
      (accum, value) =>
        accum + value.newItem.totalQty * value.newItem.item.price,
      0
    );
  };

  console.log(cartList);

  return (
    <cartContext.Provider
      value={{
        cartList,
        addToCart,
        iconCart,
        clearAllCart,
        totalPrice,
        deleteItemFromCart,
        orderFinished,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
