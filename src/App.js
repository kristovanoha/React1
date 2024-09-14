import React from "react";
import Counter from "./components/Counter"; // Importujeme Counter z nové složky

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Klikni sem pro React dokumentaci
      </a>
      <Counter /> {/* Přidáme komponentu Counter */}
    </div>
  );
}

export default App;
