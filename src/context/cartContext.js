import { useState, createContext, useContext } from "react";

// const [stateContext, setStateContext] = useState(categories);

export const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (newItem, totalQty) => {
    // const addToCart = (newItem, qty) => {
    // const index = cartList.findIndex(
    //   (i) => newItem.item.id === i.newItem.item.id
    // );

    // if (index > -1) {
    //   const oldQty = cartList[index].qty;

    //   cartList.splice(index, 1);
    //   setCartList([...cartList, { newItem, qty: qty + oldQty }]);
    // } else {
    //   setCartList([...cartList, { newItem, qty }]);
    // }
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
    //Verificamos si esta en el carrito
    const deleteItem = cartList.filter(
      (itemToDel) => itemToDel.item.id !== product.newItem.item.id
    );

    setCartList([...deleteItem]);
  };

  //[1,2,3,4] Accum= 0 => 1, 1+2 =>  3+3

  const iconCart = () => {
    return cartList.reduce(
      (accum, value) => parseInt(accum + value.newItem.totalQty),
      0
    );
    //return cartList.length
  };

  const clearAllCart = () => {
    setCartList([]);
  };

  const totalPrice = () => {
    return cartList.reduce(
      (accum, value) =>
        parseInt(accum + value.totalQty * value.newItem.item.price),
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
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
