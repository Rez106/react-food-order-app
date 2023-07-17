import { useContext, useRef, useState } from "react";
import styles from "./CartModalCheckoutForm.module.css";
import useInput from "../../hooks/use-input";
import CartContext from "../../store/cart-context";

const CartModalCheckoutForm = (props) => {
  const cartContext = useContext(CartContext);

  const isMobileWidth = screen.width < "640";

  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    onChangeHandler: onFirstNameChange,
    onBlurHandler: onFirstNameBlur,
    reset: firstNameReset,
  } = useInput((value) => value.length > 3);

  const {
    value: enteredLastName,
    isValid: LastNameIsValid,
    hasError: LastNameHasError,
    onChangeHandler: onLastNameChange,
    onBlurHandler: onLastNameBlur,
    reset: LastNameReset,
  } = useInput((value) => value.length > 3);

  const {
    value: enteredPhone,
    isValid: PhoneIsValid,
    hasError: PhoneHasError,
    onChangeHandler: onPhoneChange,
    onBlurHandler: onPhoneBlur,
    reset: PhoneReset,
  } = useInput((value) => value.length === 11 && value.includes("09"));

  const {
    value: enteredAddress,
    isValid: AddressIsValid,
    hasError: AddressHasError,
    onChangeHandler: onAddressChange,
    onBlurHandler: onAddressBlur,
    reset: AddressReset,
  } = useInput((value) => value.length > 10);

  const {
    value: enteredZipCode,
    isValid: ZipCodeIsValid,
    hasError: ZipCodeHasError,
    onChangeHandler: onZipCodeChange,
    onBlurHandler: onZipCodeBlur,
    reset: ZipCodeReset,
  } = useInput((value) => value.length === 6);

  let formIsValid;
  if (
    !firstNameIsValid ||
    !LastNameIsValid ||
    !PhoneIsValid ||
    !AddressIsValid ||
    !ZipCodeIsValid
  ) {
    formIsValid = false;
  } else {
    formIsValid = true;
  }

  const onSubmitOrderhandler = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: new Date().getTime(),
      name: enteredFirstName + " " + enteredLastName,
      phoneNumber: enteredPhone,
      address: enteredAddress,
      zipCode: enteredZipCode,
    });

    cartContext.setShowModal(false);
  };

  const inputWrapperClasses =
    "flex justify-between min-[300px]:flex-col md:flex-row gap-2";
  const labelClasses = " w-fit text-violet-600 text-xl font-semibold";
  const personalInputClasses =
    "ml-3 px-3 py-3 outline-none border-none text-violet-700 text-xl rounded-2xl";

  return (
    <form
      action=""
      className="w-full flex flex-col gap-8"
      onSubmit={onSubmitOrderhandler}
    >
      {formIsValid ? (
        <p className="bg-green-600 font-bold p-2 rounded-xl text-white">
          Good To Go!
        </p>
      ) : (
        <p className="bg-red-500 font-bold p-2 rounded-xl text-white">
          * Please Fill Out All The Marked Inputs!
        </p>
      )}
      <div className={`${inputWrapperClasses}`}>
        <div
          className="md:w-1/2 min-[300px]:w-full flex items-center justify-start min-[300px]:flex-col 
        sm:flex-row md:flex-col md:items-start"
        >
          <label
            htmlFor="firstname"
            className={`${labelClasses} ${isMobileWidth && "hidden"}`}
          >
            * First Name:
          </label>
          <input
            className={`${personalInputClasses} ${
              firstNameHasError ? "bg-red-200" : ""
            }  w-[250px]`}
            value={enteredFirstName}
            onChange={onFirstNameChange}
            onBlur={onFirstNameBlur}
            type="text"
            id="firstname"
            placeholder={`${isMobileWidth ? "First Name" : ""}`}
          />
          {firstNameHasError && (
            <p className="text-lg text-red-500 font-semibold">
              * Enter Valid First Name.
            </p>
          )}
        </div>
        <div
          className="md:w-1/2 min-[300px]:w-full flex items-center justify-start min-[300px]:flex-col
         sm:flex-row md:flex-col md:items-start"
        >
          <label
            htmlFor="lastname"
            className={`${labelClasses} ${isMobileWidth && "hidden"}`}
          >
            * Last Name:
          </label>
          <input
            className={`${personalInputClasses} ${
              LastNameHasError ? "bg-red-200" : ""
            }  w-[250px]`}
            value={enteredLastName}
            onChange={onLastNameChange}
            onBlur={onLastNameBlur}
            type="text"
            id="lastname"
            placeholder={`${isMobileWidth ? "Last Name" : ""}`}
          />
          {LastNameHasError && (
            <p className="text-lg text-red-500 font-semibold">
              * Enter Valid Last Name.
            </p>
          )}
        </div>
      </div>
      <div
        className="min-[300px]:w-full flex items-center justify-start min-[300px]:flex-col
       sm:flex-row md:flex-col md:items-start"
      >
        <label
          htmlFor="phone"
          className={`${labelClasses} ${isMobileWidth && "hidden"}`}
        >
          * Phone:
        </label>
        <input
          value={enteredPhone}
          onChange={onPhoneChange}
          onBlur={onPhoneBlur}
          type="number"
          className={`${personalInputClasses} ${styles["phone-input"]} ${
            PhoneHasError ? "bg-red-200" : ""
          }  w-[250px]`}
          id="phone"
          placeholder={`${isMobileWidth ? "09..." : ""}`}
        />
        {PhoneHasError && (
          <p className="text-lg text-red-500 font-semibold">
            * Enter Valid Phone Number.
          </p>
        )}
      </div>
      <div className={`${inputWrapperClasses} md:flex-col`}>
        <label
          htmlFor="address"
          className={`${labelClasses} ${isMobileWidth && "hidden"}`}
        >
          * Address:
        </label>
        <div className="w-full flex flex-col items-end">
          <textarea
            value={enteredAddress}
            onChange={onAddressChange}
            onBlur={onAddressBlur}
            type="text"
            id="address"
            className={`${personalInputClasses} w-full font-semibold resize-none h-36 ${
              AddressHasError ? "bg-red-200" : ""
            }`}
            placeholder={`${isMobileWidth ? "Your Address Here" : ""}`}
          />
          {AddressHasError && (
            <p className="text-lg text-red-500 font-semibold">
              * Enter Valid Address.
            </p>
          )}
        </div>
        <div className="min-[300px]:w-full flex items-center justify-start min-[300px]:flex-col sm:flex-row md:flex-col md:items-start">
          <label
            htmlFor="zipcode"
            className={`${labelClasses} ${isMobileWidth && "hidden"}`}
          >
            * Zip Code:
          </label>
          <input
            onChange={onZipCodeChange}
            onBlur={onZipCodeBlur}
            value={enteredZipCode}
            type="number"
            step="any"
            id="zipcode"
            className={`${
              styles["zipcode-input"]
            } ${personalInputClasses} w-2/5 ${
              ZipCodeHasError ? "bg-red-200" : ""
            }`}
            placeholder={`${isMobileWidth ? "Zip Code" : ""}`}
          />
          {ZipCodeHasError && (
            <p className="text-lg text-red-500 font-semibold">
              * Enter Valid Zip Code.
            </p>
          )}
        </div>
      </div>
      <div className="w-full flex 2xl:justify-end min-[300px]:justify-center">
        <button
          disabled={!formIsValid}
          type="submit"
          className="w-1/2 py-3 bg-violet-700 rounded-2xl text-white font-semibold text-xl duration-200 hover:bg-violet-800 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Submit Order
        </button>
      </div>
    </form>
  );
};

export default CartModalCheckoutForm;
