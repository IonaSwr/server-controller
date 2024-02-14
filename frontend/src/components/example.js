// ExampleComponent.js
import React, { useContext } from 'react';
import { MyContext } from '../context/Context';

const ExampleComponent = () => {
  // Access context values using useContext hook
  const { myState, incrementCount } = useContext(MyContext);

  const handleButtonClick = () => {
    // Update state using provided function
    incrementCount();
  };

  return (
    <div>
      <p>Context value: {myState}</p>
      <button onClick={handleButtonClick}>Update Context</button>
 
    </div>
  );
};

export default ExampleComponent;
