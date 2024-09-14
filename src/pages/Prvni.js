import React from "react";
import Counter from "../components/Counter";

function Prvni() {
  return (
    <div>
      <h1>Hello World x!</h1>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Klikni sem pro React dokumentaci
      </a>
      <Counter />
    </div>
  );
}

export default Prvni;
