import React, { useEffect, useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { students } from '../../services/auth';
import { history, baseHref } from '../../configs/config';
import ShareSettingsModal from '../../helpers/modals/ShareSettingsModal';

const StudentList = () => {
  const dispatch = useDispatch();
  const [allStudents, setStudents] = useState([]);
  const [
    showShareSettingsModal,
    setShowShareSettingsModal
  ] = useState(false);

  const [shareSource, setShareSource] = useState({});

  const handleShareSettingsModalClose = () =>
    setShowShareSettingsModal(false);

  const handleShareSettingsModalSave = (val) => {
    dispatch({
      type: 'SHARE_SETTINGS',
      source: shareSource._id,
      target: val
    });
    setShowShareSettingsModal(false);
  };
  useEffect(() => {
    students().then((res) => {
      setStudents(res.data);
    });
  }, [setStudents]);

  const goStudentDashboard = (id) => {
    history.push(`${baseHref}manage-dash/${id}`);
  };

  const handleShareClick = (student) => {
    setShareSource(student);
    setShowShareSettingsModal(true);
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
                  onClick={() => handleShareClick(student)}
                  variant="success"
                >
                  Move Settings
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ShareSettingsModal
        showShareSettingsModal={showShareSettingsModal}
        handleShareSettingsModalClose={handleShareSettingsModalClose}
        handleShareSettingsModalSave={handleShareSettingsModalSave}
        sourceStudent={shareSource}
        studentList={allStudents}
      />
    </>
  );
};

export default StudentList;
