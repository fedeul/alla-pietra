import { useCartContext } from "../../context/cartContext";

import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  const { item } = props;

  const { addToCart } = useCartContext();

  const onAdd = (qty) => {
    addToCart({ item: item, totalQty: qty });
  };

  return (
    <div
      key={item.id}
      className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative"
    >
      <div className="w-full max-w-6xl rounded bg-white shadow-2xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img
                src={item.img}
                className="w-full z-10 object-contain max-h-64"
                alt={item.name}
              />
              <div className="absolute top-2 right-2 py-2 px-4 bg-black text-white rounded-lg">
                <span className="text-md">$ {item.price}</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="">
              <h1 className="font-bold uppercase text-2xl mb-5">{item.name}</h1>
            </div>

            <div>
              <ItemCount
                initial={0}
                price={item.price}
                stock={item.stock}
                onAdd={onAdd}
                cap={item.cap}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
