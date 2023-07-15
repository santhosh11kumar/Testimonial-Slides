import React from "react";
import reviews from "./data";
import Display from "./Components/Display";
import "./App.css"

const App = () => {

  return (
    <div className="wrapper flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <Display data={reviews}>

      </Display>
    </div>
  );
};

export default App;
