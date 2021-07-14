import React, { useState } from "react";
import "./App.css";
import Average from "./components/Average";
import Counter from "./components/Counter";
import Info from "./components/Info";
import ValidationSample from "./components/ValidationSample";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <ValidationSample />
    </div>
  );
}

export default App;

{
  /* <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && (
        <div>
          <Info /> <hr />
        </div>
      )} */
}
