import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const MobileNav = () => {
  const { iconCart } = useCartContext;

  return (
    <>
      <div id="MobileNav" className="w-full mx-auto sticky bottom-0 md:hidden">
        <div className=" bg-gray-100 shadow-2xl rounded-2xl pb-1">
          <div className="flex">
            <div className="flex-1 group">
              <Link exact to="/">
                <button className="focus:outline-none flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-yellow-600">
                  <span className="block px-1 pt-1 pb-1">
                    <i className="fas fa-store-alt text-lg pt-1 mb-1 block"></i>
                    <span className="block text-xs pb-0 ">Home</span>
                  </span>
                </button>
              </Link>
            </div>
            <div className="flex-1 group">
              <Link exact to="/category">
                <button className="focus:outline-none flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-yellow-600">
                  <span className="block px-1 pt-1 pb-1">
                    <i className="fas fa-book-open text-lg pt-1 mb-1 block"></i>
                    <span className="block text-xs pb-0 ">Catalog</span>
                  </span>
                </button>
              </Link>
            </div>{" "}
            <div className="flex-1 group">
              <button className="focus:outline-none flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-green-600">
                <span className="block px-1 pt-3 pb-1">
                  <CartWidget iconCart={iconCart} />
                  <span className="block text-xs mt-0 pb-0 ">Cart</span>
                </span>
              </button>
            </div>
            <div className="flex-1 group">
              <Link exact to="/sales">
                <button className="focus:outline-none flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-yellow-600">
                  <span className="block px-1 pt-1 pb-1">
                    <i className="fas fa-percent text-lg pt-1 mb-1 block"></i>
                    <span className="block text-xs pb-0 ">Sales</span>
                  </span>
                </button>
              </Link>
            </div>
            <div className="flex-1 group">
              <Link exact to="/about">
                <button className="focus:outline-none flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-yellow-600">
                  <span className="block px-1 pt-1 pb-1">
                    <i className="fas fa-address-card text-lg pt-1 mb-1 block"></i>
                    <span className="block text-xs pb-0 ">About</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
