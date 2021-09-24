import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginPage from '../pages/Login';
import ProfilePage from '../pages/Profile';
import RepositoriesPage from '../pages/Repositories';

class AppRoutes extends Component {
  render() {
    return (
      <div className='TodoApp'>
        <Router>
          <Switch>
            <Route path='/' exact component={LoginPage} />
            <AuthenticatedRoute path='/profile' component={ProfilePage} />
            <AuthenticatedRoute
              path='/repositories'
              component={RepositoriesPage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRoutes;
