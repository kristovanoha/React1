import React, { Component } from "react";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "", // Stav pro hodnotu vstupu
      errorMessage: "" // Stav pro chybovou zprávu
    };
  }

  // Funkce pro zachycení změn v textovém vstupu a kontrola validace
  handleChange = (event) => {
    const value = event.target.value;
    
    // Nastavení nové hodnoty a kontrola délky textu
    if (value.length < 3) {
      this.setState({
        inputValue: value,
        errorMessage: "Text musí mít alespoň 3 znaky!" // Chybová zpráva
      });
    } else {
      this.setState({
        inputValue: value,
        errorMessage: "" // Vymazání chybové zprávy, pokud podmínka splněna
      });
    }
    this.props.onValueChange(value);
  };

  render() {

    const { labelName } = this.props; // Vezmeme `labelName` z props

    return (
      <div>
        <label> {labelName} Vložte text (minimálně 3 znaky):</label>
        <input
          type="text"
          value={this.state.inputValue} // Nastavíme hodnotu vstupu z `state`
          onChange={this.handleChange}  // Změny vstupu se zpracovávají v handleChange
        />
        {/* Zobrazení hodnoty vstupu */}
        <p>Aktuální hodnota: {this.state.inputValue}</p>
        
        {/* Pokud je chybová zpráva, zobrazíme ji červeně */}
        {this.state.errorMessage && (
          <p style={{ color: "red" }}>{this.state.errorMessage}</p>
        )}
      </div>
    );
  }
}

export default TextInput;
