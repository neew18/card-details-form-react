import React from "react";


function DecorationComponent() {
  return (
    <div className="DecorationComponent relative w-full h-[13rem] lg:w-[420px] lg:h-full">
      {/*For card's back side*/}
      <div className="absolute top-4 right-4 md:top-6 md:right-32 lg:top-[400px] lg:-right-40 ">
        <div className=" bankCardBackStyle w-72 h-40 relative rounded-lg lg:w-80 lg:h-48">
          <p className="absolute text-white top-[4.1rem] right-8 lg:top-20 ">
            000
          </p>
        </div>
      </div>

      {/*For card's front side*/}
      <div className="absolute -bottom-10 left-4 md:left-32 lg:top-32 lg:left-48 ">
        <div className="bankCardFrontStyle w-72 h-40 relative rounded-lg lg:w-80 lg:h-48">
          <div className=" w-7 h-7 rounded-full bg-white absolute left-4 top-5"></div>
          <div className=" w-[13px] h-[13px] rounded-full border-white border-solid border-[1px] absolute left-[54px] top-7"></div>
          <p className="text-white tracking-widest text-[1.2rem] absolute bottom-12 left-4 lg:text-[1.3rem]">
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
