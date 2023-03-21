import React from "react";
import cardBackPic from "./images/bg-card-back.png";

function DecorationComponent() {
  return (
    <div className="DecorationComponent relative w-full h-56">
      {/*For card's back side*/}
      <img
        className="w-72 h-40 absolute top-7 right-4"
        src={cardBackPic}
        alt="Back side of bank card"
      />

      {/*For card's front side*/}
      <div className="absolute -bottom-10 left-4">
        <div className="bankCardFrontStyle w-72 h-40 relative rounded">
          <div className=" w-7 h-7 rounded-full bg-white absolute left-4 top-5"></div>
          <div className=" w-[13px] h-[13px] rounded-full border-white border-solid border-[1px] absolute left-[54px] top-7"></div>
          <p className="text-white tracking-widest text-[1.2rem] absolute bottom-12 left-4">
            0000 0000 0000 0000
          </p>
          <small className="uppercase text-slate-200 text-xs absolute bottom-5 left-4 ">
            Jane Appleseed
          </small>
          <small className="uppercase text-slate-200 text-xs absolute bottom-5 right-4 ">
            00/00
          </small>
        </div>
      </div>
    </div>
  );
}

export default DecorationComponent;
