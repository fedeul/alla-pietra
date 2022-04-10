import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="relative pt-8 pb-6 hidden md:flex"
        style={{ backgroundColor: "#343434" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-xl fonat-semibold text-gray-100">
                DO YOU HAVE SOME IDEA IN MIND?
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-200">CONTACT ME!</h5>
              <a
                className="text-yellow-200"
                href="mailto:fede@dashboard.ltd"
                target="_blank"
                rel="noreferrer"
              >
                fede@dashboard.ltd
              </a>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="mb-6">
                <div className="flex flex-wrap justify-end">
                  <div className="mt-6 lg:mb-0 mb-6">
                    <a
                      href="https://www.dashboard.ltd"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <button
                        className="bg-white hover:bg-yellow-100 text-yellow-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i class="fas fa-toggle-on"></i>
                      </button>
                    </a>
                    <a
                      href="https://dribbble.com/fedeul"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <button
                        className="bg-white hover:bg-yellow-100 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </a>
                    <a
                      href="https://github.com/fedeul"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <button
                        className="bg-white hover:bg-yellow-100 text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fab fa-github"></i>
                      </button>
                    </a>
                    <a
                      href="https://linkedin.com/in/fedeul"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <button
                        className="bg-white hover:bg-yellow-100 text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fab fa-linkedin"></i>
                      </button>
                    </a>
                    <a
                      href="https://instagram.com/wearedashboard"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <button
                        className="bg-white hover:bg-yellow-100 text-purple-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </a>
                    <a
                      href="https://twitter.com/FedeUlbrich"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <button
                        className="bg-white hover:bg-yellow-100 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <hr className="my-6 border-green-300" /> */}
          <div className="mt-6 flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-100 font-semibold py-1">
                Copyright © <span id="get-current-year">2021</span> by{" "}
                <a
                  href="https://www.dashboard.ltd/about.html"
                  className="hover:text-red-500 text-yellow-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Fede Ulbrich
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
