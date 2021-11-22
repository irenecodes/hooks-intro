import React, { useRef } from 'react';
import Button from './UI/Button';
const ImperativeHandleTutorial = () => {
  const buttonRef = useRef(null);
  return (
    <>
      <h2>useImperativeHandle</h2>
      <p>
        Allows us to define functions based on the ref that can be called.
        Alters value of child state.
      </p>

      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button from parent
      </button>
      <Button ref={buttonRef}>Button from child...</Button>
    </>
  );
};

export default ImperativeHandleTutorial;
