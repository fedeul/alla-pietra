import { Link } from "react-router-dom";

const NavCategories = () => {
  return (
    <>
      <div className="md:hidden top-0 sticky flex z-20 bg-gray-100 shadow-2xl rounded-2xl ">
        <div>
          <span className="block px-1 group-hover:border-green-400 group-hover:border-solid ">
            <i className="fas fa-filter flex items-center place-items-center text-center mx-auto px-4 py-3 text-green-500"></i>
            <span className="hidden group-hover:inline-block ml-3 align-bottom border-b-2"></span>
          </span>
        </div>
        <div>
          <Link
            exact
            to="/category"
            className="flex items-center justify-center text-center mx-auto px-4  py-2 text-green-500"
          >
            <span className="block px-1  group-hover:border-green-400 group-hover:border-solid ">
              All
              <span className="hidden group-hover:inline-block ml-3 align-bottom border-b-2"></span>
            </span>
          </Link>
        </div>
        <div>
          <Link
            exact
            to="/category/equipment"
            className="flex items-center justify-center text-center mx-auto px-4 py-2 text-green-500"
          >
            <span className="block px-1  group-hover:border-green-400  group-hover:border-solid ">
              Equipment
              <span className="hidden group-hover:inline-block ml-3 align-bottom border-b-2"></span>
            </span>
          </Link>
        </div>
        <div>
          <Link
            exact
            to="/category/supplies"
            className="flex items-center justify-center text-center mx-auto px-4 py-2 text-green-500"
          >
            <span className="block px-1  group-hover:border-green-400  group-hover:border-solid ">
              Supplies
              <span className="hidden group-hover:inline-block ml-3 align-bottom border-b-2"></span>
            </span>
          </Link>
        </div>
        <div>
          <Link
            exact
            to="/category/tools"
            className="flex items-center justify-center text-center mx-auto px-4 py-2 text-green-500"
          >
            <span className="block px-1  group-hover:border-green-400  group-hover:border-solid ">
              Tools
              <span className="hidden group-hover:inline-block ml-3 align-bottom border-b-2"></span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavCategories;
