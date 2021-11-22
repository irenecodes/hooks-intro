// for context tutorial
import React, { useContext } from 'react';
import { AppContext } from '../ContextTutorial';

const User = () => {
  const { username } = useContext(AppContext);
  return <div>{username}</div>;
};

export default User;
