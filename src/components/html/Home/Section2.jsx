import { GiCook } from "react-icons/gi";

const Section2 = () => {
  return (
    <section className="relative  bg-blueGray-50 py-12 my-24">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src="https://m.media-amazon.com/images/S/aplus-media/sc/5c4f6161-9ea6-4947-bf4b-2c807cbb3b96.__CR0,115,2386,1476_PT0_SX970_V1___.jpg"
          />
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white mt-8">
              <GiCook class="text-3xl" />
            </div>
            <h3 className="text-3xl font-semibold">
              A growing chef inside you
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              The passion for cooking and baking, now they get bigger when you
              start using professional utensils.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
