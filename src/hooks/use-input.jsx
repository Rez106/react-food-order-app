import { useState } from "react";

const useInput = (validateCondition) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateCondition(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value.trim());

    if (event.target.value.trim() === "") {
      setIsTouched(true);
    }
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
