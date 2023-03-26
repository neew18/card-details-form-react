import React, { useContext } from "react";
import { DataContext } from "./App";

function DecorationComponent() {
  const { data } = useContext(DataContext);
  let cardNum;

  data.cardNumber === "" || data.cardNumber == undefined
    ? (cardNum = "0000 0000 0000 0000")
    : (cardNum = data.cardNumber
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim());

  return (
    <div className="DecorationComponent relative w-full h-[13rem] lg:w-[420px] lg:h-full">
      {/*For card's back side*/}
      <div className="absolute top-4 right-4 md:top-6 md:right-32 lg:top-[400px] lg:-right-40 ">
        <div className=" bankCardBackStyle w-72 h-40 relative rounded-lg lg:w-80 lg:h-48">
          <p className="absolute text-white top-[4.2rem] right-8 lg:top-[5rem] lg:text-lg  ">
            {data.cvcNumber === undefined || data.cvcNumber === ""
              ? "000"
              : data.cvcNumber}
          </p>
        </div>
      </div>

      {/*For card's front side*/}
      <div className="absolute -bottom-14 left-4 md:left-32 lg:top-32 lg:left-48 ">
        <div className="bankCardFrontStyle w-72 h-40 relative rounded-lg lg:w-80 lg:h-48">
          <div className=" w-7 h-7 rounded-full bg-white absolute left-4 top-5"></div>
          <div className=" w-[13px] h-[13px] rounded-full border-white border-solid border-[1px] absolute left-[54px] top-7"></div>
          <p className="text-white tracking-widest text-[1.2rem] absolute bottom-12 left-4 lg:text-[1.35rem] lg:bottom-14">
            {cardNum}
          </p>
          <small className="uppercase text-slate-200 text-xs absolute bottom-5 left-4 lg:text-[1rem] ">
            {data.cardHolderName === undefined || data.cardHolderName === ""
              ? "John Doe"
              : data.cardHolderName}
          </small>
          <small className="uppercase text-slate-200 text-xs absolute bottom-5 right-4 lg:text-[1rem] ">
            {data.expiryMonth === undefined || data.expiryMonth === ""
              ? "00"
              : `${data.expiryMonth}`}
            /
            {data.expiryYear === undefined || data.expiryYear === ""
              ? "00"
              : data.expiryYear}
          </small>
        </div>
      </div>
    </div>
  );
}

export default DecorationComponent;
