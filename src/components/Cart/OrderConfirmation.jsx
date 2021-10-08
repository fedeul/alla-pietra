import React from "react";
// import { orders } from "../Cart/Cart";

const OrderConfirmation = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* <!-- Information Modal --> */}
        <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3">
          <div className="flex justify-between border-b border-gray-100 px-5 py-4">
            <div>
              <i className="fas fa-exclamation-circle text-blue-500"></i>
              <span className="font-bold text-gray-700 text-lg">
                Information
              </span>
            </div>
            <div>
              <button>
                <i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i>
              </button>
            </div>
          </div>

          <div className="px-10 py-5 text-gray-600">
            {/* Hi {orders.name}! ipsum dolor sit amet, consectetur adipi scing */}
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </div>

          <div className="px-5 py-4 flex justify-end">
            <button className="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
