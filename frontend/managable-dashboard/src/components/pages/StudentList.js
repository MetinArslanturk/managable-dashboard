import React, { useEffect, useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { students } from '../../services/auth';
import { history, baseHref } from '../../configs/config';

const StudentList = () => {
  const dispatch = useDispatch();
  const [allStudents, setStudents] = useState([]);
  useEffect(() => {
    students().then((res) => {
      setStudents(res.data);
    });
  }, [setStudents]);

  const goStudentDashboard = (id) => {
    history.push(`${baseHref}manage-dash/${id}`);
  };
  return (
    <>
      <div className="grid-actions">
        <div className="course-select">
          <Form.Control as="select">
            <option>BTO625</option>
            <option>BEB652</option>
          </Form.Control>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Student Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allStudents.map((student, indice) => (
            <tr key={student._id}>
              <td>{indice + 1}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <Button
                  onClick={() => {
                    dispatch({ type: 'SET_EMPTY_LAYOUT' });
                    goStudentDashboard(student._id);
                  }}
                  variant="primary"
                >
                  Dashboard
                </Button>
                <Button
                  className="share-button"
                  onClick={undefined}
                  variant="success"
                >
                  Move Settings
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default StudentList;
