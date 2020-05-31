import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import MainPage from '../components/pages/MainPage';
import LoginPage from '../components/pages/LoginPage';

const AppRouter = () => {
  return (
    <>
      <Switch>
        <PublicRoute path="/" component={MainPage} exact />
        <PublicRoute path="/login" component={LoginPage} exact />
      </Switch>
    </>
  );
};

export default AppRouter;
