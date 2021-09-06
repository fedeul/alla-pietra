import { useState } from "react";

const ItemCount = () => {
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
    } else {
      setStock({
        item: stock.item,
        stock: (
          <div
            class="py-1 px-5 ml-2 bg-red-100 text-red-900 text-sm rounded-md border border-red-200 flex items-center"
            role="alert"
          >
            <div class="w-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <span>
              No<strong> stock</strong>
            </span>
          </div>
        ),
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
        <div
          className="
          bg-white
          shadow-md
   
          mx-3
          rounded-3xl
          flex flex-col
          justify-around
          items-center
          overflow-hidden
          sm:flex-row sm:h-64 sm:w-24
          md:w-96
        "
        >
          <img
            className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
            src="http://allapietra.eldiletante.com.ar/wp-content/uploads/2021/02/oval2.jpg"
            alt="Basket"
          />

          <div
            className="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/2
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
          >
            <div className="flex flex-col justify-start items-baseline">
              <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                Bread Proofing Baskets Set
              </h1>
              <span className="text-xs text-indigo-300 mt-0">by Cremore</span>
            </div>
            <div className="mb-2">
              <p className="text-xs text-gray-500 w-4/5 mb-2">
                Bread Proofing Baskets Set of 2 10 inch Oval Shaped Dough
                Proofing Bowls w/Liners
              </p>
              <p className="text-xs text-gray-500 w-4/5">
                Stock: {stock.stock}
              </p>
              <p className="text-xs font-bold text-gray-500 w-4/5">
                Qty: {stock.item}
              </p>
            </div>

            <div className="w-full flex justify-between items-center">
              <h1 className="font-bold text-gray-500">$20</h1>
              <button
                onClick={addItem}
                className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-lg shadow-md"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ItemCount;
