const Section3 = () => {
  return (
    <section className=" bg-gray-100 py-12 my-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-left">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
              <div className="px-4 flex-auto"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center my-16">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-blueGray-500 p-3 text-left inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i class="fas fa-file-video text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Share your recipes and learn how use your new equipment
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              When buying new products, you will be able to access tutorials and
              the best recipes from the bakery masters.
            </p>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-2 shadow-lg rounded-lg bg-red-600">
              <img
                alt="..."
                src="https://i.ytimg.com/vi/Li8uoSx0E_4/maxresdefault.jpg"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-red-600 fill-current"
                  ></polygon>
                </svg>

                <h4 className="text-xl font-bold text-white">TUTORIALS</h4>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
