import React, { useState } from "react";
import TextInputLift from "./TextInputLift"; // Přejmenovaný import

function Lifting() {
  // Správa stavu pro dva textboxy
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  // Funkce pro změnu hodnoty prvního textboxu
  const handleText1Change = (value) => {
    setText1(value);
  };

  // Funkce pro změnu hodnoty druhého textboxu
  const handleText2Change = (value) => {
    setText2(value);
  };

  return (
    <>
      <h2>Lifting State Example</h2>
      <TextInputLift label="Textbox 1" value={text1} onValueChange={handleText1Change} />
      <TextInputLift label="Textbox 2" value={text2} onValueChange={handleText2Change} />

      <div>
        <p>Hodnota z Textboxu 1: {text1}</p>
        <p>Hodnota z Textboxu 2: {text2}</p>
      </div>
    </>
  );
}

export default Lifting;
