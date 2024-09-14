import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Pocitej skvele</button>
      <br>
      </br>
      Develop vetev
    </div>
  );
}

export default Counter;
