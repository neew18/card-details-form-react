import React from "react";
import FormState from "./FormState";
import FormCompleteState from "./FormCompleteState";

function FormComponent() {
  return (
    <div className="FormComponent flex justify-center items-center mt-14 md:mt-32 lg:mt-0 lg:ml-60 lg:mr-10 xl:mx-80 ">
      <FormState />
      <FormCompleteState />
    </div>
  );
}

export default FormComponent;
