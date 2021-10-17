import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import cartIcon from "../../assets/svg/cartIcon";

const ItemCount = ({ initial, stock, onAdd, price, cap }) => {
  const { cartList } = useCartContext();
  const [qty, setQty] = useState(initial);
  const [newStock, setNewStock] = useState(stock);
  const [ButtonType, setButtonType] = useState("zeroItems");
  const handleButtonChange = () => {
    setButtonType("add");
  };

  const buttonAdd = () => {
    return (
      <>
        ADD TO
        {cartIcon()}
      </>
    );
  };

  const styleZero = () => {
    return "bg-gray-300 shadow-md text-sm flex place-items-center  text-gray-400  rounded-full px-7 py-2 font-semibold";
  };

  const styleNonZero = () => {
    return "bg-yellow-400 shadow-md text-sm flex place-items-center opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-7 py-2 font-semibold";
  };

  const ButtonZeroItem = () => {
    return (
      <button onClick={handlerOnAdd} className={styleNonZero()}>
        {buttonAdd()}
      </button>
    );
  };

  const ButtonAddToCart = ({ handleButtonChange }) => {
    handleButtonChange();
    return <button className={styleZero()}>{buttonAdd()}</button>;
  };

  const ButtonGoToCart = () => {
    return (
      <>
        <Link to="/cart">
          <button className="bg-green-400 shadow-md flex justify-center items-center text-center opacity-75 hover:opacity-100 text-gray-900 hover:text-gray-900 hover:shadow-xl w-full mt-3 px-7 py-2 font-semibold">
            GO TO
            {cartIcon()}
          </button>
        </Link>
      </>
    );
  };

  const addItem = () => {
    if (newStock > 0) {
      setQty(qty + 1);
      setNewStock(newStock - 1);
    } else {
      window.alert("No more stock available");
    }
  };

  const resItem = () => {
    if (qty > initial) setQty(qty - 1);
    if (stock > -1) setNewStock(stock + 1);
  };

  const handlerOnAdd = () => {
    onAdd(qty);
    setQty(initial);
  };

  let totalPrice = (price * qty).toFixed(2);

  return (
    <>
      <div className="mb-10">
        <p className="text-xs text-gray-400 mb-2">
          Stock:{" "}
          {newStock < 1 ? (
            <span className="inline-block rounded-full text-red-500 bg-red-200 px-2 py-1 text-xs font-bold mX-3">
              NO STOCK
            </span>
          ) : (
            newStock
          )}
        </p>
        <p className="text-sm">{cap}</p>
      </div>
      <div className=" my-4 bottom-auto">
        <div className="flex place-content-evenly">
          <button
            onClick={addItem}
            className=" bg-gray-200 text-green-600 pb-1 rounded-full mx-2 w-11"
          >
            +
          </button>
          <p className="bg-white mr-3 text-center text-gray-700 text-xl px-2 py-2  w-2">
            {qty}
          </p>
          <button
            onClick={resItem}
            className=" bg-gray-200 text-red-600 pb-1  rounded-full mx-2 w-11"
          >
            -
          </button>
          {qty > 0 && ButtonType === "add" ? (
            <ButtonZeroItem />
          ) : (
            <ButtonAddToCart handleButtonChange={handleButtonChange} />
          )}
        </div>
      </div>
      <h1 className="text-gray-700 text-center align-baseline">
        <span className="text-xl leading-none ">Total $</span>
        <span className="font-bold text-2xl "> {totalPrice}</span>
      </h1>
      {cartList < 1 ? "" : <ButtonGoToCart />}
    </>
  );
};

export default ItemCount;
