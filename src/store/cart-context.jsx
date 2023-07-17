import React, { useState, useReducer } from "react";

const CartContext = React.createContext({
  foodTotalPrice: 0,
  menuItem: [],
  orderedFood: [],
  showModal: false,
  orderState: false,
  contentState: "",
  submitedOrder: 0,
  setSubmitedOrder: () => {},
  orderingFood: () => {},
  removingFood: () => {},
  setShowModal: () => {},
  setOrderState: () => {},
  resetCart: () => {},
});

const defaultValue = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingFoodIndex = state.items.findIndex(
      (item) => item.id == action.item.id
    );

    let updatedItems;
    if (existingFoodIndex >= 0) {
      const existingFood = state.items[existingFoodIndex];
      let updatedItem = {
        ...existingFood,
        amount: existingFood.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingFoodIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingFoodIndex = state.items.findIndex(
      (item) => item.id == action.id
    );
    const existingFood = state.items[existingFoodIndex];
    const newTotalAmount =
      state.totalAmount - existingFood.price < 0
        ? 0
        : state.totalAmount - existingFood.price;

    let updatedItems;
    if (existingFood.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      let updatedItem = {
        ...existingFood,
        amount: existingFood.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingFoodIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "RESET") {
    return {
      items: [],
      totalAmount: 0,
    };
  }

  return defaultValue;
};

export const CartContextProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultValue);

  const [showModal, setShowModal] = useState(false);
  const [orderState, setOrderState] = useState(false);
  const [submitedOrder, setSubmitedOrder] = useState(0);

  const orderingFoodHandler = (food) => {
    cartDispatch({ type: "ADD", item: food });
  };

  const removingFoodHandler = (id) => {
    cartDispatch({ type: "REMOVE", id: id });
  };

  const resetCartHandler = () => {
    cartDispatch({ type: "RESET" });
    setShowModal(false);
  };

  const cartContext = {
    submitedOrder,
    setSubmitedOrder,
    orderedFood: cartState.items,
    orderingFood: orderingFoodHandler,
    removingFood: removingFoodHandler,
    foodTotalPrice: cartState.totalAmount,
    showModal: showModal,
    setShowModal,
    resetCart: resetCartHandler,
    orderState,
    setOrderState,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
