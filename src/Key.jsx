import React from 'react';

const FruitList = () => {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}{index}</li>
      ))}
    </ul>
  );
};

export default FruitList;
