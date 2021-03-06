import React, { useState } from 'react';
import { globalState } from './data';

export const GlobalContext = React.createContext();

// eslint-disable-next-line
export const AppContext = (props) => {
  const [contextState, setState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setState }}>
      {/* eslint-disable-next-line */}
    {props.children}
    </GlobalContext.Provider>
  );
};
