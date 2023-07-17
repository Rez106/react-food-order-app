import { useContext } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import CartContext from "../../store/cart-context";

const OrderSubmited = () => {
  const cartContext = useContext(CartContext);

  return (
    <>
      <div className="w-full min-h-screen bg-stone-900 opacity-75 fixed top-0 left-0 z-50"></div>
      <div
        className="min-2xl:w-1/5 p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100
                     rounded-2xl z-[60] flex flex-col items-center justify-center gap-4 shadow-lg
                     min-[300px]:w-11/12 sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-4/12"
      >
        <p className="text-green-500 text-8xl">
          <AiFillCheckCircle />
        </p>
        <p className="text-xl font-bold text-gray-800">
          Your Order Has Been Submitted!
        </p>
        <p className="text-xl font-semibold text-gray-600 font-mono">
          Code: {cartContext.submitedOrder}
        </p>
        <button
          onClick={() => cartContext.setOrderState(false)}
          type="button"
          className="font-semibold bg-green-300 py-2 px-8 rounded-2xl duration-200 hover:bg-green-400"
        >
          OK
        </button>
      </div>
    </>
  );
};

export default OrderSubmited;
