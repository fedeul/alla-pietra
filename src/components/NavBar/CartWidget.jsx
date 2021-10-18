import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import cartIcon from "../../assets/svg/cartIcon";

const CartWidget = () => {
  const { iconCart, cartList } = useCartContext();

  return (
    <>
      {cartList < 1 ? (
        <div className="flex justify-center md:block">
          <div className="relative text-gray-300 dark:text-gray-200 ">
            {cartIcon()}
            <span className="absolute bottom-3 right-3 p-1 px-2 text-xs text-white bg-white bg-opacity-0  rounded-full">
              <span className="bg-opacity-0 p-1 px-2"></span>
            </span>
          </div>
        </div>
      ) : (
        <Link to="/cart">
          <div className="flex justify-center md:block">
            <button className="focus:outline-none relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
              {cartIcon()}
              <span className="absolute bottom-3 right-3 p-1 px-2 text-xs text-white bg-green-500 bg-opacity-75 hover:bg-opacity-75 hover:bg-yellow-500 rounded-full">
                <span className="bg-opacity-100">{iconCart()}</span>
              </span>
            </button>
          </div>
        </Link>
      )}
    </>
  );
};

export default CartWidget;
