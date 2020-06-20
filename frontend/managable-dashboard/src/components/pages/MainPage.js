/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import GridDashboard from '../common-components/GridDashboard';

const MainPage = ({ isTa, userId }) => {
  const dashboardType = isTa ? 'teacherOwn' : 'studentOwn';
  return (
    <>
      <GridDashboard userId={userId} editType={dashboardType} />
    </>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.user._id,
  isTa: !!state.auth.user.isTeacher
});

export default connect(mapStateToProps)(MainPage);
