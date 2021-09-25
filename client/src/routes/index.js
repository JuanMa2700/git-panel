import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export default function AppRoutes() {
  return (
    <Router>
      <Route path='/' exact component={Login} />
      <Route path='/sign-up' component={SignUp} />
      <ProtectedRoute path='/dashboard' component={Dashboard} />
    </Router>
  );
}
