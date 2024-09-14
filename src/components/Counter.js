import React , {  useEffect }from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

// Použití useEffect
useEffect(() => {
  console.log(`Aktuální hodnota count je: ${count}`);
  document.title = `Clicked ${count} times`;
}, [count]); // Effect se spustí pouze tehdy, když se změní hodnota count


// Funkce, která se spustí při kliknutí na tlačítko
const handleClick = () => {
  console.log('Kliknuto na tlačítko');
  setCount(count + 1);
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
