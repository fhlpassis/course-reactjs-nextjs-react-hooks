import P from 'prop-types';
import './App.css';
import React, { useCallback, useState } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Son, rendered');
  return <button onClick={() => incrementButton(100)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Father, rendered');

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
