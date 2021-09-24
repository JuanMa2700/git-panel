import React from 'react';
import { useAppState } from '../contexts/AppStateContext';
import { Route, Redirect } from 'react-router-dom';

export default function AuthenticatedRoute(props) {
  const { prefix } = useAppState();
  const user = localStorage.getItem(`${prefix}user`);
  if (user) {
    return <Route {...props} />;
  } else {
    return <Redirect to='/' />;
  }
}
