import React, { createContext, useState } from 'react';
import Login from './UI/Login';
import User from './UI/User';

// Ideally the global state is in its own file and then wraps the whole application in App.js. since I have other tutorials in their own components, I'm leaving this here

export const AppContext = createContext(null);

const ContextTutorial = () => {
  const [username, setUsername] = useState('');
  return (
    <>
      <h2>useContext - not passing props to any components!</h2>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
      </AppContext.Provider>
    </>
  );
};

export default ContextTutorial;
