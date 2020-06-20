import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { baseHref } from '../configs/config';

const PrivateRoute = ({
  component: Component,
  onlyTa,
  isTa,
  isAuth,
  ...rest
}) => {
  // Logic has defined here to prevent twice render
  let TargetComponent = Component;

  // If you want to protect a route use this

  if (!isAuth || (onlyTa && !isTa)) {
    TargetComponent = Redirect;
    TargetComponent.defaultProps = {
      to: `${baseHref}login`
    };
  }

  return <Route {...rest} component={TargetComponent} />;
};

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.user._id,
  isTa: !!state.auth.user.isTeacher
});

export default connect(mapStateToProps)(PrivateRoute);
