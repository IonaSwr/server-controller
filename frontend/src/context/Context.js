// MyContext.js
import React, { createContext, useState } from 'react';

// Create a context object
export const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  // State to manage within the context
  const [myState, setMyState] = useState(0);

  // Define any functions or logic you need to update the state
  const incrementCount = () => {
    setMyState(myState + 1);
  };

  // Value object to provide to consuming components
  const contextValue = {
    myState,
    incrementCount,
    // Add any other values or functions you want to provide
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
