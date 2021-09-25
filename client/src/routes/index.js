import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Repositories from '../pages/Repositories';

export default function AppRoutes() {
  return (
    <Router>
      <Route path='/' exact component={Login} />
      <Route path='/sign-up' component={SignUp} />
      <ProtectedRoute path='/profile' component={Profile} />
      <ProtectedRoute path='/repositories' component={Repositories} />
    </Router>
  );
}
