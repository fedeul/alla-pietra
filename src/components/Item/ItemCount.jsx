import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const ItemCount = ({ initial, stock, onAdd, price, cap }) => {
  const { cartList } = useCartContext();
  const [qty, setQty] = useState(initial);
  const [newStock, setNewStock] = useState(stock);
  const [ButtonType, setButtonType] = useState("zeroItems");
  const handleButtonChange = () => {
    setButtonType("add");
  };

  const ButtonZeroItem = () => {
    return (
      // <Link to="/cart">
      <button
        onClick={handlerOnAdd}
        className="bg-yellow-400 shadow-md  flex place-items-center opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-7 py-2 font-semibold"
      >
        ADD TO
        <svg
          className="w-5 h-7 ml-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    );
  };

  const ButtonAddToCart = ({ handleButtonChange }) => {
    handleButtonChange();
    return (
      <button className="bg-gray-300 shadow-md  flex place-items-center  text-gray-400  rounded-full px-7 py-2 font-semibold">
        ADD TO
        <svg
          className="w-5 h-5 ml-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    );
  };

  const ButtonGoToCart = () => {
    return (
      <>
        <Link to="/cart">
          <button className="bg-green-400 shadow-md flex justify-center items-center text-center opacity-75 hover:opacity-100 text-gray-900 hover:text-gray-900 hover:shadow-xl w-full mt-3 px-7 py-2 font-semibold">
            GO TO
            <svg
              className="w-5 h-7 ml-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
            <span class="inline-block rounded-full text-red-500 bg-red-200 px-2 py-1 text-xs font-bold mX-3">
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
