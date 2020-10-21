import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, Browse, Signup, Signin } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { authUserListener, useAuthListener } from './hooks';
import * as ROUTES from './constants/routes';

export default function App() {
  const { user } = useAuthListener();

  return (
  <Router>
    <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
      <Home />
    </IsUserRedirect>
    <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
      <Browse />
    </ProtectedRoute>
    <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
      <Signin />
    </IsUserRedirect>
    <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
      <Signup />
    </IsUserRedirect>
  </Router>
  );
}