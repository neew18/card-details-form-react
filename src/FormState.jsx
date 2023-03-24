import React from "react";
import { useForm } from "react-hook-form";

function FormState() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  console.log("errors", errors);

  return (
    <>
      <form
        className="p-2 m-3  text-sm FormState"
        action="/"
        autoComplete="off"
        onSubmit={handleSubmit((data) => console.log(data))}
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
              : "focus:outline-[#21092F] border-transparent"
          }`}
          {...register("cardHolderName", {
            required: "Can't be blank!",
            minLength: {
              value: 3,
              message: "Names must be 3 characters or above",
            },
          })}
          id="cardHolderName"
          placeholder="eg. John Doe"
        />
        <p className="mt-1 mb-4 text-xs errorRed">
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
              : "focus:outline-[#21092F] border-transparent"
          }`}
          name=""
          {...register("cardNumber", {
            required: "Can't be blank!",
            pattern: {
              value:
                /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
              message: "Wrong format, numbers only",
            },
          })}
          id="cardNumber"
          placeholder="eg. 1234 5678 9123 0000"
        />
        <p className="mt-1 mb-4 text-xs errorRed">
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
              className={` border rounded-md mr-1 p-2 pl-3  text-base mt-3 inputs expireDate first-letter ${
                errors.expiredDateMonth
                  ? "focus:outline-red-600  border-red-600 border-2"
                  : "focus:outline-[#21092F] border-transparent"
              }`}
              {...register("expiredDateMonth", {
                required: "Can't be blank!",
                pattern: {
                  value: /(19|20)\d\d$/,
                  message: "Please enter a valid month",
                },
              })}
              name=""
              id="expiredDateMonth"
              placeholder="MM"
            />
            <input
              className={`border rounded-md p-2 pl-3  text-base inputs expireDate ${
                errors.expiredDateYear
                  ? "focus:outline-red-600  border-red-600 border-2"
                  : "focus:outline-[#21092F] border-transparent"
              }`}
              name=""
              {...register("expiredDateYear", {
                required: "Can't be blank!",
                pattern: {
                  value: /(19|20)\d\d$/,
                  message: "Please enter a valid year",
                },
              })}
              id="expiredDateYear"
              placeholder="YY"
            />
            <p className="mt-1 text-xs errorRed">
              {errors.expiredDateMonth?.message}
            </p>
            <p className="mt-1 mb-4 text-xs errorRed">
              {errors.expiredDateYear?.message}
            </p>
          </div>
          {/* Input for the card's cvc number /^[0-9]{3,4}$/ */}
          <div>
            <label
              className="uppercase text-xs md:text-sm font-semibold tracking-[2px]"
              htmlFor="cvc"
            >
              cvc
            </label>
            <input
              className={`border rounded-md p-2 pl-3 text-base mt-3 inputs cvc-input ${
                errors.cvc
                  ? "focus:outline-red-600 border-red-600 border-2 "
                  : "focus:outline-[#21092F] border-transparent"
              }`}
              name=""
              {...register("cvc", {
                required: "Can't be blank!",
                pattern: {
                  value: /^[0-9]{3,4}$/,
                  message: "Please enter a valid CVC numbers",
                },
              })}
              id="cvc"
              placeholder="eg.123"
            />
            <p className="mt-1 mb-4 text-xs errorRed">{errors.cvc?.message}</p>
          </div>
        </div>
        {/* submit button */}
        <input
          type="submit"
          className="border w-full text-lg text-white p-3 rounded-md mt-4 mb-9"
          value="Confirm"
        />
      </form>
    </>
  );
}

export default FormState;
