import React from "react";
import FormComponent from "./FormComponent";
import DecorationComponent from "./DecorationComponent";
import "./App.css";

function App() {
  return (
    <div className="App lg:flex">
      <DecorationComponent />
      <FormComponent />
    </div>
  );
}

export default App;
