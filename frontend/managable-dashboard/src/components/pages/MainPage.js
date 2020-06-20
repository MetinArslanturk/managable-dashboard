/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import GridDashboard from '../common-components/GridDashboard';

const MainPage = () => {
  const [dashboardType, setDashboarType] = useState('teacherStudent');

  return (
    <>
      {dashboardType === 'teacherOwn' ? (
        <GridDashboard editType="teacherOwn" />
      ) : dashboardType === 'teacherStudent' ? (
        <GridDashboard editType="teacherStudent" />
      ) : (
        <GridDashboard editType="studentOwn" />
      )}
    </>
  );
};

export default MainPage;
