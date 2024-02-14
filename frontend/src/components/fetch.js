
import React, { useContext } from 'react';
import { MyContext } from '../context/Context';

const FetchComponent = () => {
  const { data, isLoading } = useContext(MyContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data ? (
        <div>
          <h2>Data from Server</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default FetchComponent;
