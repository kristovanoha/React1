import React, { useReducer } from 'react';

function CounterAdvanced() {
  // Definice reduceru přímo uvnitř komponenty
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return { count: 0 };
      default:
        return state;
    }
  };

  // Použití useReducer hooku s počátečním stavem
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Počítadlo: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Přičíst</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Odečíst</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default CounterAdvanced;
