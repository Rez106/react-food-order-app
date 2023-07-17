import { LuChefHat } from "react-icons/lu";
import { GiHotMeal } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import imgBanner from "../../../../../src/assets/image/banner.jpg";
import mobileImgBanner from "../../../../../src/assets/image/mobilebanner.jpg";

const Home = () => {
  return (
    <div className="">
      <div className={`w-full border-b-2 border-violet-300`}>
        <img
          src={screen.width < "1024" ? mobileImgBanner : imgBanner}
          alt="banner"
          className="w-full max-w-full"
        />
      </div>
      <div className="lg:w-11/12 min-[300px]:w-11/12 sm:w-1/2 mx-auto flex lg:flex-row gap-4 pt-5 min-[300px]:flex-col">
        <div
          className="lg:w-1/3 md:w-full min-[300px]:w-full 
          lg:border-r-2 lg:border-gray-300 flex items-center justify-center gap-3 p-5"
        >
          <p className="text-6xl text-sky-600">
            <LuChefHat />
          </p>
          <div className="min-[300px]:w-full flex-col min-[300px]:justify-end min-[300px]:border-none max-md:w-1/2 lg:w-full">
            <p className="font-bold text-xl">Best Chefs Are Here</p>
            <p className=" text-base text-gray-500">
              Best chefs to prepare your delicious meal.
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/3 md:w-full min-[300px]:w-full 
          lg:border-r-2 lg:border-gray-300 flex items-center justify-center gap-3 p-5"
        >
          <p className="text-6xl text-sky-600">
            <GiHotMeal />
          </p>
          <div className="min-[300px]:w-full flex-col min-[300px]:justify-end min-[300px]:border-none max-md:w-1/2 lg:w-full">
            <p className="font-bold text-xl">Delivering Hot Meals</p>
            <p className=" text-base text-gray-500">
              No cold delivery around here.
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/3 md:w-full flex items-center min-[300px]:w-full min-[300px]:border-none
         justify-center gap-3 p-5"
        >
          <p className="text-6xl text-sky-600">
            <BiSupport />
          </p>
          <div className="min-[300px]:w-full flex-col min-[300px]:justify-end min-[300px]:border-none max-md:w-1/2 lg:w-full">
            <p className="font-bold text-xl">27/4 Support Available</p>
            <p className=" text-base text-gray-500">
              Everyday there's someone to help you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
