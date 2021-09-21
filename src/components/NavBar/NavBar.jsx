import React from "react";
import Logotipo from "../../assets/img/logo.png";
import "../../index.css";
import CartWidget from "./CartWidget";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretDown } from "react-icons/io5";

const NavBar = () => {
  const [estado, setEstado] = useState(
    <span className="bg-green-400">CONNECTED</span>
  );
  return (
    <>
      <nav className="fixed w-full z-10 top-0  bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link exact to="/">
              <div>
                <button className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                  <img
                    src={Logotipo}
                    className="logotipo"
                    alt="Almacen Panadero"
                  />
                </button>
              </div>
            </Link>

            {/* <!-- Mobile menu button --> */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <div className="dropdown relative items-center mt-4 md:mt-0 mx-6">
                <Link exact to="">
                  <p className="flex place-items-center my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-green-400 md:mx-4 md:my-0">
                    Categories <IoCaretDown />
                  </p>
                </Link>
                {/* <!-- Dropdown menu --> */}
                <div className="absolute opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95  right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                  <Link exact to="/category/accesories">
                    <p className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white">
                      Accesories
                    </p>
                  </Link>
                  <Link exact to="/category/tools">
                    <p className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white">
                      Tools
                    </p>
                  </Link>
                </div>
              </div>
              <Link exact to="/sales">
                <p
                  className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-green-400 md:mx-4 md:my-0"
                  href="#sales"
                >
                  Sales
                </p>
              </Link>
              <Link exact to="/contact">
                <p
                  className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-green-400 md:mx-4 md:my-0"
                  href="#contact"
                >
                  Contact
                </p>
              </Link>
              <Link exact to="/about">
                {" "}
                <p
                  className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-green-400 md:mx-4 md:my-0"
                  href="#about"
                >
                  About
                </p>
              </Link>
            </div>

            <CartWidget />

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
                  className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white"
                >
                  Your profile
                </a>
                <a
                  href="#orders"
                  className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white"
                >
                  Your orders
                </a>
                <a
                  href="#help"
                  className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white"
                >
                  Help
                </a>
                <a
                  href="#settings"
                  className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white"
                >
                  Settings
                </a>
                <a
                  href="#logout"
                  onClick={() =>
                    setEstado(<span className="bg-red-400">DISCONNECTED</span>)
                  }
                  className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:text-white"
                >
                  Sign Out
                </a>
              </div>
            </div>
            {estado}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
