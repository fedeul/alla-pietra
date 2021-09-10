import { useState } from "react";

const ItemCount = () => {
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
            className=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mx-2 w-12"
          >
            +
          </button>
          <p className="bg-white mr-5 text-center text-gray-700 px-2 py-2 mx-2 w-4">
            {stock.item}
          </p>
          <button
            onClick={resItem}
            className=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mx-2 w-12"
          >
            -
          </button>
          <button className="bg-yellow-400 text-black px-2 py-2 rounded-lg shadow-md">
            Add to cart
          </button>
        </div>
      </div>
      <h1 className="font-bold text-gray-500">TOTAL ${totalPrice}</h1>
    </>
  );
};

export default ItemCount;
