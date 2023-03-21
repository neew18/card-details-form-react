import React from "react";
import FormState from "./FormState";
import FormCompleteState from "./FormCompleteState";

function FormComponent() {
  return (
    <div className="FormComponent flex justify-center items-center	">
      <FormState />
      <FormCompleteState />
    </div>
  );
}

export default FormComponent;
