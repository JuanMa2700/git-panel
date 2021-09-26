import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import useLocalStorage from '../hooks/UseLocalStorage';
import Navbar from '../components/Navbar';
import ProtectedRoute from './ProtectedRoute';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export default function AppRoutes() {
  const [isAuthenticated] = useLocalStorage('auth', null);
  if (!isAuthenticated) {
    return (
      <Router>
        <Route path='/' exact component={Login} />
        <Route path='/sign-up' component={SignUp} />
      </Router>
    );
  } else {
    return (
      <>
        <Navbar />
        <Router>
          <ProtectedRoute path='/' component={Dashboard} />
        </Router>
      </>
    );
  }
}
