import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import useLocalStorage from '../hooks/UseLocalStorage';
import { localStorageKeys } from '../utils/Consts';
import Navbar from '../components/Navbar';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function AppRoutes() {
  const [isAuthenticated] = useLocalStorage(localStorageKeys.auth, null);
  if (!isAuthenticated) {
    return (
      <Router>
        <Route path='/' exact component={Login} />
        <Route path='/sign-up' component={SignUp} />
        {/* Implement not found page for future */}
        <Redirect to='/' />
      </Router>
    );
  } else {
    return (
      <Router>
        <Navbar />
        <Route path='/' exact component={Dashboard} />
        <Route path='/profile' component={Profile} />
        {/* Implement not found page for future */}
        <Redirect to='/' />
      </Router>
    );
  }
}
