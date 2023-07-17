import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import ReactDOM from "react-dom";
import CartModalCheckout from "./CartModalCheckout";
import { IoArrowBackCircle } from "react-icons/io5";

const Backdrop = () => {
  const cartInfoContext = useContext(CartContext);

  const onCloseClickHandler = () => {
    cartInfoContext.setShowModal(false);
  };

  return (
    <div
      className="w-full min-h-screen max-h-fit bg-stone-900 fixed top-0 left-0 z-[9999] opacity-75"
      onClick={onCloseClickHandler}
    />
  );
};

export const ModalItems = (props) => {
  const cartItemAddHandler = (item) => {
    props.cartContext.orderingFood({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    props.cartContext.removingFood(id);
  };

  const hasItems = props.orderedFood.length > 0;

  const noItem = (
    <p className="font-semibold text-2xl text-center text-violet-700">
      You Have To Select Meal First :)
    </p>
  );

  const items = props.orderedFood.map((item) => (
    <div
      key={item.id}
      id={item.id}
      className="py-3 w-full flex items-center border-b-[1px] border-gray-300 
     "
    >
      <div className=" sm:w-1/3">
        <h4 className="text-3xl pb-3">{item.name}</h4>
        <p className="text-xl font-bold text-violet-600">${item.price}</p>
      </div>
      <div className="w-1/3 flex items-center justify-start min-[300px]:justify-center">
        <p className="py-2 px-4 rounded-2xl border-2 border-gray-300 cursor-default text-lg font-semibold">
          {item.amount}
        </p>
      </div>
      <div
        className="w-1/3 flex items-center justify-end min-[300px]:w-full
       "
      >
        <button
          type="button"
          onClick={cartItemRemoveHandler.bind(null, item.id)}
          id={item.id}
          className="w-12 h-10 mr-2 rounded-2xl bg-violet-600 text-white flex items-center justify-center text-lg font-bold cursor-pointer hover:bg-violet-800 duration-200"
        >
          -
        </button>
        <button
          type="button"
          onClick={cartItemAddHandler.bind(null, item)}
          id={item.id}
          className="w-12 h-10 rounded-2xl bg-violet-600 text-white flex items-center justify-center text-lg font-bold cursor-pointer hover:bg-violet-800 duration-200"
        >
          +
        </button>
      </div>
    </div>
  ));

  return hasItems ? items : noItem;
};

export const ModalContent = () => {
  const cartInfoContext = useContext(CartContext);
  const [isCheckedout, setIsCheckedout] = useState(false);

  return (
    <div className="2xl:w-2/5 lg:w-3/5 md:w-11/12 max-[768px]:w-11/12 min-[300px]:min-h-[20rem] min-[300px]:max-h-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 z-[99999] bg-slate-100">
      <div className="min-h-[20rem] max-h-fit">
        {isCheckedout ? (
          <CartModalCheckout isCheckedout={setIsCheckedout} />
        ) : (
          <ModalItems
            orderedFood={cartInfoContext.orderedFood}
            cartContext={cartInfoContext}
          />
        )}
      </div>
      <div className="w-full flex items-center min-[300px]:flex-col sm:flex-row">
        <div className="w-1/2 flex items-center sm:justify-start min-[300px]:justify-center min-[300px]:w-full">
          <p className="font-bold text-2xl">Total Price:</p>
          <p className="text-2xl font-bold text-violet-700">
            ${cartInfoContext.foodTotalPrice.toFixed(2)}
          </p>
        </div>
        <div className="w-1/2 my-4 flex items-center sm:justify-end min-[300px]:justify-center min-[300px]:w-full">
          {isCheckedout ? (
            <button
              type="button"
              disabled={!cartInfoContext.orderedFood.length > 0}
              className="w-24 flex items-center rounded-2xl font-semibold text-lg duration-200 text-sky-600 py-1 px-4 
              border-2 border-transparent hover:border-sky-600 cursor-pointer mr-3
              disabled:bg-gray-500 disabled:border-gray-500"
              onClick={() => setIsCheckedout(false)}
            >
              <IoArrowBackCircle className="mr-2" />
              Back
            </button>
          ) : (
            ""
          )}
          <button
            type="button"
            className="bg-transparent border-2 text-red-600 mr-4 border-transparent w-24
             rounded-2xl duration-200 py-1 px-4 font-semibold text-lg hover:border-red-600"
            onClick={() => {
              cartInfoContext.setShowModal(false);
              setIsCheckedout(false);
            }}
          >
            Cancel
          </button>
          {isCheckedout ? (
            ""
          ) : (
            <button
              type="button"
              disabled={!cartInfoContext.orderedFood.length > 0}
              className="w-24 bg-violet-600 rounded-2xl font-semibold text-lg duration-200 text-white py-1 px-4 
              border-2 border-violet-600 hover:bg-violet-800 hover:border-violet-800 hover:text-white cursor-pointer
              disabled:bg-gray-500 disabled:border-gray-500"
              onClick={() => setIsCheckedout(true)}
            >
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const CartModal = () => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalContent />,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default CartModal;
