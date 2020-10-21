import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Signup, Signin } from './pages';
import { IsUserRedirect, isUserRedirect } from './helpers/routes';
import * as ROUTES from './constants/routes';

export default function App() {
  const user = {};

  return (
  <Router>
    <Route exact path={ROUTES.HOME}>
      <Home />
    </Route>
    <Route exact path={ROUTES.BROWSE}>
      <Browse />
    </Route>
    <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
      <Signin />
    </IsUserRedirect>
    <Route exact path={ROUTES.SIGN_UP}>
      <Signup />
    </Route>
  </Router>
  );
}