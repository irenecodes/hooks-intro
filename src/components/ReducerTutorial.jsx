import React, { useReducer } from 'react';

const ReducerTutorial = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1,
        };
      case 'TOGGLE_TEXT':
        return {
          ...state,
          showText: !state.showText,
        };
      default:
        return state;
    }
  };

  //hold all states
  //   params: reducer function, initial state in reducer
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <>
      <h2>useReducer</h2>
      <section>
        <h3>changing counter number</h3>
        {state.count}
        <button
          onClick={() => {
            dispatch({ type: 'INCREMENT' });
            dispatch({ type: 'TOGGLE_TEXT' });
          }}
        >
          +
        </button>

        {state.showText && 'Display text!'}
      </section>
    </>
  );
};

export default ReducerTutorial;
