import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import MainPage from '../components/pages/MainPage';
import LoginPage from '../components/pages/LoginPage';
import StudentList from '../components/pages/StudentList';

const AppRouter = () => {
  return (
    <>
      <Switch>
        <PublicRoute path="/" component={MainPage} exact />
        <PublicRoute
          path="/manage/students"
          component={StudentList}
          exact
        />
        <PublicRoute path="/login" component={LoginPage} exact />
      </Switch>
    </>
  );
};

export default AppRouter;
