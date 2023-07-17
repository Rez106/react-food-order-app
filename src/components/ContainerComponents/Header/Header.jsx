import Actions from "./Actions";
import { IoFastFood } from "react-icons/io5";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
const Header = () => {
  return (
    <>
      <header className="w-full flex flex-col items-center bg-slate-100 justify-center">
        <nav className="w-full h-full flex justify-center items-center border-b-2 border-violet-400">
          <div className="w-11/12 flex py-2 items-center">
            <div className="w-1/3 max-[599px]:w-1/2 min-[599px]:w-1/4">
              <span className="flex text-6xl text-white bg-sky-400 w-fit p-1 rounded-2xl cursor-pointer duration-200 hover:bg-sky-500">
                <IoFastFood />
              </span>
            </div>
            <div className="w-1/3 min-[100px]:hidden min-[599px]:block min-[599px]:w-2/4">
              <SearchBar />
            </div>
            <div className="w-1/3 max-[599px]:w-1/2 min-[599px]:w-1/4">
              <Actions />
            </div>
          </div>
        </nav>
        <Menu />
      </header>
    </>
  );
};

export default Header;
