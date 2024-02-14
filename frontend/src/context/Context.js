import React, { createContext, useState,useEffect } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState(0);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the server
        const response = await fetch('http://localhost:4000/run-command?cmd=echo%20great');
        const fetchedData = await response.text();
        setData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const incrementCount = () => {
    setMyState(myState + 1);
  };

  const contextValue = {
    myState,
    incrementCount,
    data,
    isLoading,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
