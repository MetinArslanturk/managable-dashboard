import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import MainPage from '../components/pages/MainPage';
import LoginPage from '../components/pages/LoginPage';
import StudentList from '../components/pages/StudentList';
import StudentDashboard from '../components/pages/StudentDashboard';
import PrivateRoute from './PrivateRoute';
import { baseHref } from '../configs/config';

const AppRouter = () => {
  return (
    <>
      <Switch>
        <PrivateRoute
          path={`${baseHref}`}
          component={MainPage}
          exact
        />
        <PrivateRoute
          path={`${baseHref}manage/students`}
          onlyTa
          component={StudentList}
          exact
        />
        <PrivateRoute
          path={`${baseHref}manage-dash/:id`}
          onlyTa
          component={StudentDashboard}
          exact
        />
        <PublicRoute
          path={`${baseHref}login`}
          component={LoginPage}
          exact
        />
      </Switch>
    </>
  );
};

export default AppRouter;
