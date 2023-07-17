import { useContext, useState } from "react";
import CartModalCheckoutForm from "./CartModalCheckoutForm";
import CartContext from "../../store/cart-context";

const CartModalCheckout = (props) => {
  const cartContext = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchOrder = async (order) => {
    try {
      setIsLoading(true);
      setError("");

      const response = await fetch(
        "https://food-order-react-a79f3-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify(order),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Order Failed!");
      }

      cartContext.setSubmitedOrder(order.id);
      cartContext.setOrderState(true);
      cartContext.resetCart();
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const onSubmitOrderhandler = (orderDesc) => {
    const order = { ...orderDesc, orderedFood: cartContext.orderedFood };
    fetchOrder(order);
  };

  return (
    <>
      <div className="w-full mb-4">
        <div className="bg-violet-100 p-4 w-full rounded-2xl">
          <CartModalCheckoutForm
            onSubmit={onSubmitOrderhandler}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </>
  );
};

export default CartModalCheckout;
