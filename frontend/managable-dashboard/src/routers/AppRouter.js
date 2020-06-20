import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import MainPage from '../components/pages/MainPage';
import LoginPage from '../components/pages/LoginPage';
import StudentList from '../components/pages/StudentList';
import StudentDashboard from '../components/pages/StudentDashboard';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path="/" component={MainPage} exact />
        <PrivateRoute
          path="/manage/students"
          onlyTa
          component={StudentList}
          exact
        />
        <PrivateRoute
          path="/manage-dash/:id"
          onlyTa
          component={StudentDashboard}
          exact
        />
        <PublicRoute path="/login" component={LoginPage} exact />
      </Switch>
    </>
  );
};

export default AppRouter;
