import React from "react";
import Label from "../components/Label"; 
import Counter from "../components/Counter";

function Treti() {
  return (
    <div>
      <h1>Toto je TRETI stránka</h1>
      <Label name="Komponeta labale" />
      <p>Vítejte na druhé stránce naší aplikace.</p>
      <Counter></Counter>
    </div>
  );
}

export default Treti;