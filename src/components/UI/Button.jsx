// for useImperativeHandle tutorial

import React, { forwardRef, useImperativeHandle, useState } from 'react';

// can access ref and props passed from parents with forwardRef
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    //pass functions we want to access from our parent
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button From Child</button>
      <span>
        Button from child doesn't do anything. Parent button can access the
        state of child though.
      </span>
      {toggle && <p>Toggle</p>}
    </>
  );
});

export default Button;
