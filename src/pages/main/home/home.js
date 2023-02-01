import React from 'react';

const Home = (props) => {
  
  return (
    <div>
      <h1>Home</h1>
      <span>{props.username}</span>
      <button onClick={props.logout}>logout</button>
    </div>
  );
};

export default Home;