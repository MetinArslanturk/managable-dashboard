import React from 'react';
import GridDashboard from '../common-components/GridDashboard';

const StudentDashboard = ({ match: { params } }) => {
  console.log(params.id);
  return (
    <>
      <GridDashboard userId={params.id} editType="teacherStudent" />
    </>
  );
};

export default StudentDashboard;
