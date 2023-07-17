import { useContext } from "react";
import FoodItemForm from "./FoodItemForm";
import CartContext from "../../../../store/cart-context";

const FoodItem = (props) => {
  const cartInfoContext = useContext(CartContext);

  {
    return props.foods.map((item) => {
      const isInCart = cartInfoContext.orderedFood.find(
        (ordereditem) => ordereditem.id === item.id
      );
      return (
        <div
          key={item.id}
          className={`w-full flex items-center last:border-none py-3 border-b-[1px] border-gray-300
       min-[300px]:flex-col min-[600px]:flex-row`}
        >
          <div
            className={`min-[300px]:w-full min-[600px]:w-1/2 min-[600px]:text-left min-[300px]:text-center`}
          >
            <h4 className={`text-xl font-bold`}>{item.name}</h4>
            <p className={`text-lg italic text-stone-600 font-semibold py-3`}>
              {item.ingredience}
            </p>
            <p className={`text-xl font-bold text-violet-600`}>${item.price}</p>
          </div>
          <FoodItemForm
            id={item.id}
            foods={props.foods}
            isInCart={isInCart}
            onAdd={cartInfoContext.orderingFood}
          />
        </div>
      );
    });
  }
};

export default FoodItem;
