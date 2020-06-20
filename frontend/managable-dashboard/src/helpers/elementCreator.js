/* eslint-disable no-nested-ternary */
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { ProgressBar, Table, Button } from 'react-bootstrap';
import { BsPencil, BsTrophy } from 'react-icons/bs';

export default (element, editType, removeHandler, modalHandler) => {
  return (
    <div key={element.i} className="inside-item">
      <div className="item-buttons">
        {element.canRemove && (
          <Button
            variant="light"
            onClick={() => {
              removeHandler(element.i);
            }}
          >
            X
          </Button>
        )}
        {(editType === 'teacherStudent' ||
          editType === 'teacherOwn') && (
          <Button
            variant="light"
            onClick={() => {
              modalHandler(element);
            }}
          >
            <BsPencil />
          </Button>
        )}
      </div>
      {element.type === 'piechart' ? (
        <>
          <PieChart
            data={[
              {
                title: 'Math',
                value: 25,
                color: '#E38627'
              },
              { title: 'Science', value: 60, color: '#C13C37' },
              { title: 'English', value: 40, color: '#6A2135' }
            ]}
            label={({ dataEntry }) => dataEntry.title}
          />
        </>
      ) : element.type === 'progressbar' ? (
        <div className="progress-wrapper">
          <b>Your Graduation Path</b>
          <ProgressBar now={60} label="60%" />
        </div>
      ) : element.type === 'leaderboard' ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
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
      ) : element.type === 'badge' ? (
        <>
          <div className="badge-item align-center">
            <BsTrophy />
          </div>
          <h4 className="align-center">Trophy Award</h4>
        </>
      ) : element.type === 'textpoint' ? (
        <>
          <div className="point-text-item">
            <div className="points">87</div>
            <div className="points-label">Points</div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
