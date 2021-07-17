import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const globalState = {
  title: 'The title of context',
  body: 'The body of context',
  counter: 0,
};

const GlobalContext = React.createContext();

// eslint-disable-next-line
const Div = ({children}) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

// eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return (
    <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body} {counter}
    </p>
  );
};

function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}
export default App;
