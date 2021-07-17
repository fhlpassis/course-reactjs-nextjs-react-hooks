import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'The title of context',
  body: 'The body of context',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change': {
      console.log('change called with this payload', action.payload);
      return { ...state, title: action.payload };
    }
    case 'reverse': {
      console.log('reverse called');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  console.log('No actions called');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'change', payload: new Date().toLocaleString('pt-BR') })}>Click</button>
      <button onClick={() => dispatch({ type: 'reverse' })}>Reverse</button>
      <button onClick={() => dispatch({ type: '' })}>No Action</button>
    </div>
  );
}
export default App;
