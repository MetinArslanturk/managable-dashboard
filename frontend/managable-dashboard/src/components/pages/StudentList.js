import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const StudentList = () => {
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button onClick={undefined} variant="primary">
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
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default StudentList;
