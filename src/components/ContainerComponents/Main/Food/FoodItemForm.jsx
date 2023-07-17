import { useContext, useEffect, useRef, useState } from "react";
import styles from "./FoodItemForm.module.css";
import { AiFillPlusCircle } from "react-icons/ai";
import CartContext from "../../../../store/cart-context";

const FoodItemForm = (props) => {
  const amountInput = useRef();
  const [foodAmount, setFoodAmount] = useState("1");

  const onSubmitOrderHandler = (event) => {
    event.preventDefault();
    setFoodAmount(amountInput.current.value);
    const foodAmountNumber = +foodAmount;

    const filteredFood = props.foods.filter((item) => item.id == props.id);
    const orderedFood = filteredFood[0];

    if (foodAmount.trim().length === 0 || foodAmount < 1 || foodAmount > 5)
      return;

    props.onAdd({ ...orderedFood, amount: foodAmountNumber });
  };

  return (
    <form
      className={`${styles["food-action"]} min-[300px]:flex-row min-[300px]:py-3 min-[600px]:justify-end`}
      onSubmit={onSubmitOrderHandler}
    >
      <div className={styles["food-amount-wrapper"]}>
        <label htmlFor={`foodAmount${props.id}`}>
          Amount
          <input
            ref={amountInput}
            type="number"
            id={`foodAmount${props.id}`}
            defaultValue="1"
            min="1"
            max="5"
          />
        </label>
      </div>
      <button
        type="submit"
        className="flex items-center bg-sky-500 text-white py-2 px-5 rounded-2xl text-lg font-semibold
                hover:bg-sky-600 hover:scale-95 duration-200"
      >
        <AiFillPlusCircle className="mr-1" />{" "}
        {props.isInCart ? "In Cart" : "Buy"}
      </button>
    </form>
  );
};

export default FoodItemForm;
