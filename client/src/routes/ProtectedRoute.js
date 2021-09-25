import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useLocalStorage from '../hooks/UseLocalStorage';

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const [isAuthenticated] = useLocalStorage('auth', null);
  console.log({ isAuthenticated });
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
}

export default ProtectedRoute;
