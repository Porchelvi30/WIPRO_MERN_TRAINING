import React from 'react';
import Login from '../components/Login';

const withAuth = (Component) => {
  return (props) => {
    
    return props.isLoggedIn ? <Component {...props} /> : <Login onLogin={props.onLogin} />;
  };
};

export default withAuth;