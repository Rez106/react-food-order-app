import { useContext, useEffect, useState } from "react";
import styles from "./Actions.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import CartContext from "../../../store/cart-context";

const Actions = () => {
  const CartInfoContext = useContext(CartContext);
  const [itemAddAnim, setItemAddAnim] = useState(false);

  const cartItemCount = CartInfoContext.orderedFood.reduce((curr, food) => {
    return curr + food.amount;
  }, 0);

  useEffect(() => {
    if (CartInfoContext.orderedFood.length === 0) return;
    setItemAddAnim(true);
    const timer = setTimeout(() => {
      setItemAddAnim(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [CartInfoContext.orderedFood]);

  const cartClasses = `${styles["cart-wrapper"]} ${
    itemAddAnim ? styles.bump : ""
  } bg-sky-500 text-white`;

  const onCartClickHandler = () => {
    CartInfoContext.setShowModal(true);
  };

  return (
    <div className="w-full flex justify-end">
      <button
        className={`${styles.user} ${styles.btn} bg-violet-500 hover:text-violet-700`}
      >
        {" "}
        <AiOutlineUser />{" "}
      </button>
      <div className={cartClasses} onClick={onCartClickHandler}>
        <button className={`${styles.cart}`}>
          <AiOutlineShoppingCart />
        </button>
        <div className={styles["cart-item-count"]}>{cartItemCount}</div>
      </div>
    </div>
  );
};

export default Actions;
