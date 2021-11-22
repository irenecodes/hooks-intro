import React, { useLayoutEffect, useRef, useEffect } from 'react';

const LayoutTutorial = () => {
  const inputRef = useRef(null);
  // called before useEffect. useEffect happens AFTER page render. useLayoutEffect is called as the very first
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    console.log(
      'Which value will display? Original or useEffect changed value?',
      inputRef.current.value
    );
  }, []);
  useEffect(() => {
    inputRef.current.value = 'CHANGED value';
  }, []);
  return (
    <>
      <h2>useLayoutEffect</h2>
      <input
        type="text"
        ref={inputRef}
        value="DEFAULT initial value"
        readOnly
      />
    </>
  );
};

export default LayoutTutorial;
