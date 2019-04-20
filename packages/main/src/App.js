import React, { Component } from 'react';
import { LogIn, LogOut } from 'login';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PrivatePage from './PrivatePage';
import './App.css';

const LogOutWithRouter = withRouter(({ history }) =>
  localStorage.getItem('loggedIn') ? (
    <LogOut onLogOut={() => history.push('/login')} />
  ) : null
);

const LogInWithRouter = withRouter(({ history }) => (
  <LogIn onLogIn={() => history.push('/')} />
));

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <LogOutWithRouter />
          <Route path="/login" component={LogInWithRouter} />
          <PrivateRoute exact path="/" component={PrivatePage} />
        </div>
      </Router>
    );
  }
}

export default App;
