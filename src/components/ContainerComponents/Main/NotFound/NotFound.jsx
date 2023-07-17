import { Link } from "react-router-dom";
import notFoundImg from "../../../../assets/image/notfound.svg";

const NotFound = () => {
  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center">
      <div className="min-[300px]:w-full 2xl:w-1/2 flex justify-center items-center">
        <img src={notFoundImg} className="h-[76vh]" alt="not-found" />
      </div>
      <Link
        to="/"
        className="py-3 px-8 rounded-xl bg-sky-500 text-white font-semibold duration-200 hover:bg-sky-400"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
