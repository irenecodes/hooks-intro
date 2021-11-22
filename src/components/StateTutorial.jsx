import React, { useState } from 'react';

const StateTutorial = () => {
  //changing counter number
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  //changing input value
  const [inputValue, setInputValue] = useState('This is the default!');

  const onChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <h2>useState</h2>
      <section>
        <h3>changing counter number</h3>
        {counter}
        <button onClick={increment}>+</button>
      </section>
      <section>
        <h3>changing input value</h3>
        <input
          type="text"
          placeholder="write something here!"
          onChange={onChange}
        />
        <p>This is the value: {inputValue}</p>
      </section>
    </>
  );
};

export default StateTutorial;
