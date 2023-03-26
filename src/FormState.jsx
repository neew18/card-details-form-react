import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "./App";
import { HiddenContext } from "./FormComponent";

function FormState() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const { data, setData } = useContext(DataContext);
  const { hidden, setHidden } = useContext(HiddenContext);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        className={`p-2 m-2  text-sm FormState ${!hidden ? "block" : "hidden"}`}
        action="/"
        autoComplete="off"
        onSubmit={handleSubmit((inputData) => {
          console.log(inputData);
          setHidden(true);
        })}
      >
        {/* Input for the name of card holder */}
        <label
          className=" uppercase text-xs md:text-sm font-semibold tracking-[2px]"
          htmlFor="cardHolderName"
        >
          cardholder name
        </label>
        <input
          className={`inputs border rounded-md p-2 pl-3 text-base inputs w-full mt-3 ${
            errors.cardHolderName
              ? "focus:outline-red-600  border-red-600 border-2"
              : "focus:outline-[#21092F] border"
          }`}
          {...register("cardHolderName", {
            required: "Can't be blank!",
            minLength: {
              value: 3,
              message: "Names must be 3 characters or above",
            },
          })}
          id="cardHolderName"
          onChange={changeHandler}
          name="cardHolderName"
          value={data.cardHolderName}
          placeholder="eg. John Doe"
        />
        <p className="mt-1 mb-4 text-xs text-red-600">
          {errors.cardHolderName?.message}
        </p>
        {/* Input for the card number */}
        <label
          className=" uppercase text-xs md:text-sm font-semibold tracking-[2px]"
          htmlFor="cardNumber"
        >
          card number
        </label>
        <input
          className={`inputs border rounded-md p-2 pl-3 text-base inputs w-full mt-3 ${
            errors.cardNumber
              ? "focus:outline-red-600  border-red-600 border-2"
              : "focus:outline-[#21092F] border"
          }`}
          {...register("cardNumber", {
            required: "Can't be blank!",
            pattern: {
              value:
                /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
              message: "Wrong format, numbers only",
            },
            minLength: {
              value: 16,
              message: "Card number must be at least 16 digits",
            },
          })}
          id="cardNumber"
          name="cardNumber"
          value={data.cardNumber}
          onChange={changeHandler}
          placeholder="eg. 1234 5678 9123 0000"
        />
        <p className="mt-1 mb-4 text-xs text-red-600">
          {errors.cardNumber?.message}
        </p>
        <div className=" grid grid-cols-2 gap-1 mb-6">
          {/* Inputs for the card's expiry date */}
          <div>
            <label
              className="uppercase text-xs md:text-sm font-semibold tracking-[2px] "
              htmlFor="expiredDateMonth expiredDateYear"
            >
              exp. date (mm/yy)
            </label>
            <input
              className={` border rounded-md mr-1 p-2 pl-3  text-base mt-3 inputs expireDate ${
                errors.expiryMonth
                  ? "focus:outline-red-600  border-red-600 border-2"
                  : "focus:outline-[#21092F] border"
              }`}
              {...register("expiryMonth", {
                required: "Can't be blank!",
                pattern: {
                  value: /^(0?[1-9]|1[012])$/,
                  message: "Please enter a valid month",
                },
              })}
              name="expiryMonth"
              value={data.expiryMonth}
              onChange={changeHandler}
              id="expiryMonth"
              placeholder="MM"
            />
            <input
              className={`border rounded-md p-2 pl-3  text-base inputs expireDate ${
                errors.expiryYear
                  ? "focus:outline-red-600  border-red-600 border-2"
                  : "focus:outline-[#21092F] border"
              }`}
              {...register("expiryYear", {
                required: "Can't be blank!",
                pattern: {
                  value: /^[0-9]{2}/,
                  message: "2 numbers only",
                },
              })}
              id="expiryYear"
              name="expiryYear"
              value={data.expiryYear}
              onChange={changeHandler}
              placeholder="YY"
            />
            <p className="mt-1 text-xs text-red-600">
              {errors.expiryMonth?.message}
            </p>
            <p className="mt-1 mb-4 text-xs text-red-600">
              {errors.expiryYear?.message}
            </p>
          </div>
          {/* Input for the card's cvc number /^[0-9]{3,4}$/ */}
          <div>
            <label
              className="uppercase text-xs md:text-sm font-semibold tracking-[2px]"
              htmlFor="cvcNumber"
            >
              cvc
            </label>
            <input
              className={`border rounded-md p-2 pl-3 text-base mt-3 inputs cvc-input ${
                errors.cvcNumber
                  ? "focus:outline-red-600 border-red-600 border-2 "
                  : "focus:outline-[#21092F] border"
              }`}
              id="cvcNumber"
              name="cvc"
              value={data.cvc}
              {...register("cvcNumber", {
                required: "Can't be blank!",
                pattern: {
                  value: /^[0-9]{3,4}$/,
                  message: "Please enter a valid CVC numbers",
                },
              })}
              onChange={changeHandler}
              placeholder="eg.123"
            />
            <p className="mt-1 mb-4 text-xs text-red-600">
              {errors.cvcNumber?.message}
            </p>
          </div>
        </div>
        {/* submit button */}
        <input
          type="submit"
          className="border w-full text-lg text-white p-3 rounded-md mb-9"
          value="Confirm"
        />
      </form>
    </>
  );
}

export default FormState;
