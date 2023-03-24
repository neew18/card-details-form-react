import React, { createContext, useState } from "react";
import FormState from "./FormState";
import FormCompleteState from "./FormCompleteState";
import Footer from "./Footer";

export const HiddenContext = createContext(null);

function FormComponent() {
  const [hidden, setHidden] = useState(false);
  return (
    <HiddenContext.Provider value={{ hidden, setHidden }}>
      <div className="FormComponent flex justify-center flex-col items-center mt-14 md:mt-32 lg:mt-0 lg:ml-60 lg:mr-10 xl:mx-80 ">
        <FormState />
        <FormCompleteState />
        <Footer />
      </div>
    </HiddenContext.Provider>
  );
}

export default FormComponent;
