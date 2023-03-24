import React, { createContext, useState } from "react";
import FormComponent from "./FormComponent";
import DecorationComponent from "./DecorationComponent";
import "./App.css";

export const DataContext = createContext(null);

function App() {
  const [data, setData] = useState({
    cardHolderName: "John Doe",
    cardNumber: "0000 0000 0000 0000",
    expiryMonth: "00",
    expiryYear: "00",
    cvcNumber: "000",
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className="App lg:flex">
        <DecorationComponent />
        <FormComponent />
      </div>
    </DataContext.Provider>
  );
}

export default App;
