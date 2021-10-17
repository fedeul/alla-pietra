import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const MobileNav = () => {
  const { iconCart } = useCartContext;

  return (
    <>
      <div id="MobileNav" className="w-full mx-auto sticky bottom-0 md:hidden">
        <div className=" bg-gray-100 shadow-2xl rounded-2xl">
          <div className="flex">
            <div className="flex-1 group">
              <Link exact to="/">
                <button className="focus:outline-none flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-yellow-600">
                  <span className="block px-1 pt-1 pb-1">
                    <i className="fas fa-store-alt text-lg pt-1 mb-1 block"></i>
                    <span className="block text-xs pb-2">Home</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-yellow-600 rounded-full"></span>
                  </span>
                </button>
              </Link>
            </div>
            <div className="flex-1 group">
              <Link exact to="/category">
                <button className="focus:outline-none flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-yellow-600">
                  <span className="block px-1 pt-1 pb-1">
                    <i className="fas fa-book-open text-lg pt-1 mb-1 block"></i>
                    <span className="block text-xs pb-2">Catalog</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-yellow-600 rounded-full"></span>
                  </span>
                </button>
              </Link>
            </div>{" "}
            <div className="flex-1 group">
              <button className="focus:outline-none flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-yellow-600">
                <span className="block px-1 pt-3 pb-1">
                  {/* <i className="far fa-search text-lg pt-1 mb-1 block"></i> */}
                  <CartWidget iconCart={iconCart} />
                  <span className="block text-xs mt-2 pb-2">Cart</span>
                  <span className="block w-5 mx-auto h-1 group-hover:bg-yellow-600 rounded-full"></span>
                </span>
              </button>
            </div>
            <div className="flex-1 group">
              <Link exact to="/sales">
                <button className="focus:outline-none flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-yellow-600">
                  <span className="block px-1 pt-1 pb-1">
                    <i className="fas fa-percent text-lg pt-1 mb-1 block"></i>
                    <span className="block text-xs pb-2">Sales</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-yellow-600 rounded-full"></span>
                  </span>
                </button>
              </Link>
            </div>
            <div className="flex-1 group">
              <Link exact to="/settings">
                <button className="focus:outline-none flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-yellow-600">
                  <span className="block px-1 pt-1 pb-1">
                    <i className="fas fa-cog text-lg pt-1 mb-1 block"></i>
                    <span className="block text-xs pb-2">Settings</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-yellow-600 rounded-full"></span>
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
