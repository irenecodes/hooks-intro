import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EffectTutorial = () => {
  const [data, setData] = useState('');
  // useEffect will be called on rerender (when state changes) and when instantiated. i.e. componentDidMount and setState
  // primarily used for API calls when loading a page
  useEffect(() => {
    console.log('yo the component is instantiated');
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        // console.log(response.data);
        console.log('api is called');
      });
    // pass array of all states I want to listen to. here I listen to nothing so useEffect only runs on mount
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <section>Hello World</section>
    </>
  );
};

export default EffectTutorial;
