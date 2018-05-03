import React from 'react';

const Welcome = (props)=>{
  if(props.loggedIn === true)
  {
    return (
        <h1>Welcome Varun</h1>
    );
  }else
  {
    return (
      <h1>Login to continue</h1>
    );
  }
};


export default Welcome;
