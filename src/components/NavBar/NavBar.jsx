import React from "react";
import Logotipo from "../../assets/img/logo.png";
import "../../index.css";
import CartWidget from "./CartWidget";
import { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { BsViewList } from "react-icons/bs";
import { IoStorefrontOutline } from "react-icons/io5";
import {
  RiScales2Line,
  RiKnifeLine,
  RiBookOpenLine,
  RiPercentLine,
  RiInformationLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const NavBar = () => {
  const { iconCart } = useCartContext;
  const [estadoLogIn, setEstadoLogIn] = useState(
    <div className="dropdown relative items-center mt-4 md:mt-0 mx-6">
      <button
        type="button"
        className="relative z-10 block p-2 bg-white rounded-md dark:bg-gray-800 focus:outline-none"
        aria-label="toggle profile dropdown"
      >
        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/63756946?s=48&v=4"
            className="object-cover w-full h-full"
            alt="avatar"
          />
        </div>

        <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
          Fede Ulbrich
        </h3>
      </button>{" "}
      {/* <!-- Dropdown menu --> */}
      <div className="absolute opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95  right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
        <a
          href="#profile"
          className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white opacity-50 cursor-not-allowed"
        >
          Your profile
        </a>
        <a
          href="#orders"
          className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white opacity-50 cursor-not-allowed"
        >
          Your orders
        </a>
        <a
          href="#help"
          className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white opacity-50 cursor-not-allowed"
        >
          Help
        </a>
        <a
          href="#settings"
          className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white opacity-50 cursor-not-allowed"
        >
          Settings
        </a>
        <a
          href="#logout"
          onClick={() =>
            setEstadoLogIn(
              <div className="dropdown relative items-center mt-4 md:mt-0 mx-6">
                <button
                  type="button"
                  className="relative z-10 block p-2 bg-white rounded-md dark:bg-gray-800 focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>

                  <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
                    Sign in
                  </h3>
                </button>{" "}
                {/* <!-- Dropdown menu --> */}
                <div className="absolute opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95  right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                  <a
                    href="#logout"
                    onClick={() =>
                      setEstadoLogIn(
                        <div className="dropdown relative items-center mt-4 md:mt-0 mx-6">
                          <button
                            type="button"
                            className="relative z-10 block p-2 bg-white rounded-md dark:bg-gray-800 focus:outline-none"
                            aria-label="toggle profile dropdown"
                          >
                            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                                className="object-cover w-full h-full"
                                alt="avatar"
                              />
                            </div>
                          </button>
                        </div>
                      )
                    }
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            )
          }
          className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white"
        >
          Sign Out
        </a>
      </div>
    </div>
  );
  return (
    <>
      <nav className="fixed w-full z-10 top-0  bg-white shadow dark:bg-gray-800 hidden md:flex">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link exact to="/">
              <div>
                <button className="outline-none text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                  <img
                    src={Logotipo}
                    className="logotipo"
                    alt="Almacen Panadero"
                  />
                </button>
              </div>
            </Link>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <div className="dropdown relative items-center mt-4 md:mt-0">
                <button className="outline-none">
                  <p className="flex place-items-center my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-green-400 md:mx-4 md:my-0">
                    <RiBookOpenLine className="mr-2" /> Catalog <IoCaretDown />
                  </p>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div className="absolute opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95  right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                  <Link exact to="/category">
                    <p className="outline-none flex place-items-center px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white">
                      <BsViewList className="mr-2" /> All products
                    </p>
                  </Link>
                  <hr />
                  <Link exact to="/category/equipment">
                    <p className="outline-none flex place-items-center px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white">
                      <RiScales2Line className="mr-2" /> Equipment
                    </p>
                  </Link>
                  <Link exact to="/category/supplies">
                    <p className="outline-none flex place-items-center px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white">
                      <IoStorefrontOutline className="mr-2" /> Supplies
                    </p>
                  </Link>
                  <Link exact to="/category/tools">
                    <p className="outline-none flex place-items-center px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white">
                      <RiKnifeLine className="mr-2" /> Tools
                    </p>
                  </Link>
                </div>
              </div>
              <Link exact to="/sales">
                <p
                  className="outline-none flex place-items-center my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-green-400 md:mx-4 md:my-0"
                  href="#sales"
                >
                  <RiPercentLine className="mr-2" /> Sales
                </p>
              </Link>
              <Link exact to="/about">
                {" "}
                <p
                  className="outline-none flex place-items-center my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-green-400 md:mx-4 md:my-0"
                  href="#about"
                >
                  <RiInformationLine className="mr-2" /> About
                </p>
              </Link>
            </div>
            <CartWidget iconCart={iconCart} />
            {estadoLogIn}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
