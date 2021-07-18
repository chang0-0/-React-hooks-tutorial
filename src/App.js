import { render } from "@testing-library/react";
import React, { useState, Component } from "react";
import "./App.css";
import Average from "./components/Average";
import Counter from "./components/Counter";
import Info from "./components/Info";
import LifeCycleSample from "./components/LifeCycleSample";
import ValidationSample from "./components/ValidationSample";
import WeakList from "./components/weakList";

function App() {
  return (
    <div className="App">
      <WeakList />
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
