import { BsInstagram, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  const onFooterLinkClickHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-7 w-full min-h-fit flex flex-col bg-slate-600 p-4 shadow-inner">
      <div className="w-full flex flex-col sm:flex-row">
        <div className="w-full flex items-center justify-center sm:justify-start">
          <span className="flex text-6xl text-white bg-sky-400 w-fit p-1 rounded-2xl cursor-pointer duration-200 hover:bg-sky-500">
            <IoFastFood />
          </span>
          <span className="ml-3 text-white text-2xl font-semibold">
            Food Order App
          </span>
        </div>
        <div className="w-full my-5">
          <form
            action=""
            className="w-full flex flex-col items-center sm:items-end"
          >
            <input
              type="email"
              className="w-10/12 py-2 px-4 rounded-2xl mb-1 outline-none 2xl:w-7/12"
              placeholder="E-mail Address Here"
            />
            <button
              type="button"
              className="w-10/12 2xl:w-7/12 rounded-2xl py-2 bg-violet-500 text-white font-semibold text-lg hover:scale-95 duration-150"
            >
              % Specials
            </button>
          </form>
        </div>
      </div>
      <div className="w-full flex flex-col min-[402px]:grid min-[402px]:grid-cols-2 min-[402px]:gap-2 sm:flex sm:flex-row sm:justify-between">
        <ul className="text-slate-400 max-[401px]:text-center font-semibold">
          <h5 className="text-2xl font-bold text-white">Our Pages</h5>
          <li className="cursor-pointer hover:underline py-2">
            <Link to="/" onClick={onFooterLinkClickHandler}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:underline py-2">
            <Link to="/foods" onClick={onFooterLinkClickHandler}>
              Food
            </Link>
          </li>
          <li className="cursor-pointer hover:underline py-2">
            <Link to="/user" onClick={onFooterLinkClickHandler}>
              User
            </Link>
          </li>
          <li className="cursor-pointer hover:underline py-2">
            <Link to="/about" onClick={onFooterLinkClickHandler}>
              About us
            </Link>
          </li>
        </ul>
        <ul className="text-slate-400 max-[401px]:text-center font-semibold">
          <h5 className="text-2xl font-bold text-white">Customer Policy</h5>
          <li className="cursor-pointer hover:underline py-2">
            <a href="#" onClick={onFooterLinkClickHandler}>
              Return Policy
            </a>
          </li>
          <li className="cursor-pointer hover:underline py-2">
            <a href="#" onClick={onFooterLinkClickHandler}>
              Guid
            </a>
          </li>
          <li className="cursor-pointer hover:underline py-2">
            <a href="#" onClick={onFooterLinkClickHandler}>
              Terms
            </a>
          </li>
          <li className="cursor-pointer hover:underline py-2">
            <a href="#" onClick={onFooterLinkClickHandler}>
              Contact us
            </a>
          </li>
        </ul>
        {/* part 2 */}
        <ul className="text-slate-400 max-[401px]:text-center font-semibold">
          <h5 className="text-2xl font-bold text-white">Co-Owners</h5>
          <li className="cursor-pointer hover:underline py-2">
            <a href="#" onClick={onFooterLinkClickHandler}>
              StarBucks
            </a>
          </li>
          <li className="cursor-pointer hover:underline py-2">
            <a href="#" onClick={onFooterLinkClickHandler}>
              McDonald
            </a>
          </li>
          <li className="cursor-pointer hover:underline py-2">
            <a href="#" onClick={onFooterLinkClickHandler}>
              KFC
            </a>
          </li>
          <li className="cursor-pointer hover:underline py-2">
            <a href="#" onClick={onFooterLinkClickHandler}>
              Pizza Pizza
            </a>
          </li>
        </ul>
        <ul className="text-slate-400 max-[401px]:text-center font-semibold">
          <h5 className="text-2xl font-bold text-white">Storey Branches</h5>
          <li className="cursor-pointer hover:underline py-2">
            <a href="#" onClick={onFooterLinkClickHandler}>
              New York
            </a>
          </li>
          <li className="cursor-pointer hover:underline py-2">
            <a href="#" onClick={onFooterLinkClickHandler}>
              Shahreza
            </a>
          </li>
          <li className="cursor-pointer hover:underline py-2">
            <a href="#" onClick={onFooterLinkClickHandler}>
              Tokyo
            </a>
          </li>
          <li className="cursor-pointer hover:underline py-2">
            <a href="#" onClick={onFooterLinkClickHandler}>
              Vancouver
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full flex gap-5 text-2xl justify-center text-slate-300">
        <span className="cursor-pointer duration-150 hover:text-sky-400">
          <BsTwitter />
        </span>
        <span className="cursor-pointer duration-150 hover:text-violet-500">
          <BsInstagram />
        </span>
        <span className="cursor-pointer duration-150 hover:text-sky-500">
          <BsTelegram />
        </span>
        <span className="cursor-pointer duration-150 hover:text-red-500">
          <BsYoutube />
        </span>
      </div>
      <div className="w-full text-center mt-5">
        <p className="text-lg font-semibold text-slate-900">
          © 2023 Copyright. Developed by @Rez106.
        </p>
      </div>
    </div>
  );
};

export default Footer;
