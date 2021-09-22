import { useState } from "react";
import { Link } from "react-router-dom";

const ButtonGoCart = () => {
  return (
    <Link to="/cart">
      <button
        onClick={() => console.log("cart")}
        className="bg-green-500 shadow-md  flex place-items-center opacity-75 hover:opacity-100 text-gray-700 hover:text-gray-900 rounded-full px-8 py-2 font-semibold"
      >
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
  );
};

const ButtonAddToCart = ({ handleButtonChange }) => {
  return (
    <button
      onClick={handleButtonChange}
      className="bg-yellow-400 shadow-md  flex place-items-center opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-7 py-2 font-semibold"
    >
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

const ItemCount = () => {
  // ===== PARA USAR EN FUTUROS CAMPOS DE INPUT ===== //
  const [ButtonType, setButtonType] = useState("CheckOut");
  const handleButtonChange = () => {
    setButtonType("add");
  };

  let price = 20;

  const [stock, setStock] = useState({
    item: 0,
    stock: 10,
    initial: 0,
  });

  const addItem = () => {
    if (stock.stock > 0) {
      setStock({
        item: stock.item + 1,
        stock: stock.stock - 1,
      });
    }
  };

  const resItem = () => {
    if (stock.stock < 10) {
      setStock({
        item: stock.item - 1,
        stock: stock.stock + 1,
      });
    }
  };

  let totalPrice = price * stock.item;

  return (
    <>
      <div className=" my-4 bottom-auto">
        <div className="flex place-content-evenly">
          <button
            onClick={addItem}
            className=" bg-gray-200 text-blue-600 pb-1 rounded-full mx-2 w-11"
          >
            +
          </button>
          <p className="bg-white mr-3 text-center text-gray-700 text-xl px-2 py-2  w-2">
            {stock.item}
          </p>
          <button
            onClick={resItem}
            className=" bg-gray-200 text-blue-600 pb-1  rounded-full mx-2 w-11"
          >
            -
          </button>{" "}
          {stock.item > 0 && ButtonType === "add" ? (
            <ButtonGoCart />
          ) : (
            // <ButtonAddToCart />
            // ===== PARA USAR EN FUTUROS CAMPOS DE INPUT ===== //
            <ButtonAddToCart handleButtonChange={handleButtonChange} />
          )}
        </div>
      </div>
      <h1 className="text-gray-700 text-center align-baseline">
        <span className="text-xl leading-none ">Total $</span>
        <span className="font-bold text-2xl "> {totalPrice}</span>
      </h1>
    </>
  );
};

export default ItemCount;
