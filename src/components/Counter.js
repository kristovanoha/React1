import React , {  useContext, useEffect }from "react";
import { ContextMain } from "../context/ContextMain"; // Aktualizovaný import


function Counter() {

  const { count, incrementCount } = useContext(ContextMain);

// Použití useEffect
useEffect(() => {
  console.log(`Aktuální hodnota count je: ${count}`);
  document.title = `Clicked ${count} times`;
}, [count]); // Effect se spustí pouze tehdy, když se změní hodnota count


// Funkce, která se spustí při kliknutí na tlačítko
const handleClick = () => {
  console.log('Kliknuto na tlačítko');
 // setCount(count + 1);
  incrementCount();
};

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Přičísts</button>
      <br>
      </br>
      Develop vetev
    </div>
  );
}

export default Counter;
