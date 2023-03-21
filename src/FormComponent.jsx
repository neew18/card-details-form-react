import React from "react";
import FormState from "./FormState";
import FormCompleteState from "./FormCompleteState";
function FormComponent() {
  return (
    <div>
      <FormState />
      <FormCompleteState />
    </div>
  );
}

export default FormComponent;
