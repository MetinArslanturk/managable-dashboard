import React from 'react';
import { Route } from 'react-router-dom';

// It seems unnecessary but it can be used for Dependency Injection
export const PublicRoute = ({ component: Component, ...rest }) => {
  // Logic has defined here to prevent twice render
  const TargetComponent = Component;

  return <Route {...rest} component={TargetComponent} />;
};

export default PublicRoute;
