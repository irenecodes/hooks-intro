import React, { useRef } from 'react';

const RefTutorial = () => {
  //reference to a DOM element. similar to angular ElementRef,Renderer2
  const inputRef = useRef(null);

  const onClick = () => {
    //whenever accessing, need to write .current
    console.log(inputRef.current.value);
    // common use case : focus
    inputRef.current.focus();
    // common use : clear
    // inputRef.current.value = '';
  };

  return (
    <>
      <h2>useRef</h2>
      <input type="text" placeholder="example..." ref={inputRef} />
      <button onClick={onClick}>Log my input</button>
    </>
  );
};

export default RefTutorial;
