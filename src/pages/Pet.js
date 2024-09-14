import React from "react";
import TextInput from "../components/TextInput";

function Pet() {
  return (
    <div>
      <h1>Toto je PET stránka</h1>
      <p>Vítejte na druhé stránce naší aplikace.</p>
      <TextInput labelName="PopisekPETKY" ></TextInput>
    </div>
  );
}

export default Pet;