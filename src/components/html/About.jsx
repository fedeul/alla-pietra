import { BiMailSend } from "react-icons/bi";

const About = () => {
  return (
    <>
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            id="blackOverlay"
            className="w-full h-full absolute opacity-95 bg-black"
          >
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
              }}
              alt="Fede Ulbrich's avatar"
            ></div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlnsName="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                pointsName="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="Fede Ulbrich's avatar"
                        src="https://www.dashboard.ltd/images/avatar.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-24">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                    Fede Ulbrich
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Fort Collins, Colorado
                  </div>

                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Digital designer - Front-end developer
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    University of Buenos Aires | Coder House <br /> Escuela
                    superior de Creativos Publicitarios
                  </div>
                </div>
                <div className="md:hidden">
                  <div className="w-full lg:w-7/12 px-0">
                    <div className="flex flex-wrap items-top mb-6">
                      <div className="w-full lg:w-7/12 px-2 ml-auto">
                        <div className="mt-6 lg:mb-0 mb-6">
                          <a
                            href="https://www.dashboard.ltd"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            <button
                              className="bg-gray-100 hover:bg-yellow-100 text-yellow-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
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
                              className="bg-gray-100 hover:bg-yellow-100 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
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
                              className="bg-gray-100 hover:bg-yellow-100 text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
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
                              className="bg-gray-100 hover:bg-yellow-100 text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                              type="button"
                            >
                              <i className="fab fa-linkedin"></i>
                            </button>
                          </a>
                          <a
                            href="https://instagram.com/proyectosdiletantes"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            <button
                              className="bg-gray-100 hover:bg-yellow-100 text-purple-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
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
                              className="bg-gray-100 hover:bg-yellow-100 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
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
                <div className="w-full  px-4 ">
                  <div className="py-6 px-3 md:mt-32 sm:mt-0">
                    <a href="mailto:fede@dashboard.ltd">
                      <button
                        className="bg-yellow-600 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <span className="flex place-items-center">
                          <BiMailSend className="mr-2" /> Contact
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Hi! I'm Federico (for short Fede). My professional path
                        has enabled me to work in different institutions and
                        experiment in new areas of technical and virtual
                        communication, designing, and programming. I have done
                        projects in web design, UX/UI, mobile apps design, and
                        brand development. My first studies in advertising
                        creativity have trained me to develop conceptual
                        thinking and apply it to my projects.
                      </p>
                      <a
                        href="https://www.dashboard.ltd/about.php"
                        className="font-normal text-yellow-600"
                      >
                        More about me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
