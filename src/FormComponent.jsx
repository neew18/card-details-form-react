import React from "react";
import FormState from "./FormState";
import FormCompleteState from "./FormCompleteState";
import Footer from "./Footer";
function FormComponent() {
  return (
    <div className="FormComponent flex justify-center flex-col items-center mt-14 md:mt-32 lg:mt-0 lg:ml-60 lg:mr-10 xl:mx-80 ">
      <FormState />
      <FormCompleteState />
      <Footer />
    </div>
  );
}

export default FormComponent;
