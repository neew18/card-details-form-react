import React from "react";
import CompleteIcon from "./images/icon-complete.svg";

function FormCompleteState() {
  return (
    <div className="FormCompleteState p-2 border ">
      <img className="" src={CompleteIcon} alt="Icon for completed form" />
      <h2 className="uppercase tracking-widest text-2xl font-semibold mb-4 mt-8">
        Thank you!
      </h2>
      <p className=" text-slate-500 text-base mb-8">
        We've added your card details
      </p>
      <input
        type="submit"
        className="border text-lg text-white p-2 rounded-md mt-2"
        value="Continue"
      />
    </div>
  );
}

export default FormCompleteState;
