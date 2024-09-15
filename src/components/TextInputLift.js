import React from "react";

// Přejmenovaná komponenta TextInputLift přijímá hodnotu (value) a funkci pro změnu (onValueChange)
function TextInputLift({ label, value, onValueChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value} // Hodnota vstupu
        onChange={(e) => onValueChange(e.target.value)} // Při změně volá funkci z rodiče
      />
    </div>
  );
}

export default TextInputLift;
