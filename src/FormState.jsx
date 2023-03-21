import React from "react";

function FormState() {
  return (
    <>
      <form
        className="p-2 border flex flex-col text-sm formState"
        action="/"
        autoComplete="off"
      >
        <label
          className=" uppercase mb-2 text-xs tracking-[1px]"
          htmlFor="cardHolderName"
        >
          cardholder name
        </label>
        <input
          className="inputs border rounded-md p-2 pl-3 text-base inputs"
          type="text"
          id="cardHolderName"
          placeholder="eg. John Doe"
        />
        <label
          className=" uppercase mb-2 mt-5 text-xs tracking-[1px]"
          htmlFor="cardNumber"
        >
          card number
        </label>
        <input
          className="inputs border rounded-md p-2 pl-3 text-base inputs"
          type="text"
          name=""
          id="cardNumber"
          placeholder="eg. 1234 5678 9123 0000"
        />
        <div className=" grid grid-cols-2 gap-2 my-6">
          <div>
            <label
              className="uppercase text-xs tracking-[1px]"
              htmlFor="expiredDateMonth expiredDateYear"
            >
              exp. date (mm/yy)
            </label>
            <input
              className=" border rounded-md p-2 pl-3 w-16 text-base mt-2 inputs"
              type="tel"
              name=""
              id="expiredDateMonth"
              placeholder="MM"
            />
            <input
              className=" border rounded-md p-2 pl-3 w-16 ml-[6px] text-base inputs"
              type="tel"
              name=""
              id="expiredDateYear"
              placeholder="YY"
            />
          </div>
          <div>
            <label className="uppercase text-xs tracking-[1px]" htmlFor="cvc">
              cvc
            </label>
            <input
              className=" border rounded-md p-2 pl-3 w-[137px] text-base mt-2 inputs"
              type="tel"
              name=""
              id="cvc"
              required
              placeholder="eg.123"
            />
          </div>
        </div>
        <input
          type="submit"
          className="border text-lg text-white p-2 rounded-md mt-2"
          value="Confirm"
        />
      </form>
    </>
  );
}

export default FormState;
