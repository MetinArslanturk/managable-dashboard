import React, { useState } from 'react';
import { Button, Form, Modal, Col } from 'react-bootstrap';

const ShareSettingsModal = ({
  showShareSettingsModal,
  handleShareSettingsModalClose,
  handleShareSettingsModalSave,
  sourceStudent,
  studentList
}) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectChange = (e, id) => {
    const val = e.target.checked;
    setSelectedValues((values) => {
      const alreadyThere = values.some((i) => i === id);
      if (val) {
        if (!alreadyThere) {
          return [...values, id];
        }
      }
      if (alreadyThere) {
        const final = values.filter((i) => i !== id);
        return final;
      }
      return values;
    });
  };
  return (
    <Modal
      show={showShareSettingsModal}
      onHide={handleShareSettingsModalClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Share Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Row>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
            >
              <Form.Label>Select Students To Share</Form.Label>

              {studentList.map((student) => {
                if (student._id === sourceStudent._id) {
                  return undefined;
                }
                return (
                  <Form.Check
                    type="checkbox"
                    key={student._id}
                    id={student._id}
                    onChange={(e) =>
                      handleSelectChange(e, student._id)
                    }
                    label={student.name}
                  />
                );
              })}
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleShareSettingsModalClose}
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            if (selectedValues.length > 0) {
              handleShareSettingsModalSave(selectedValues);
            }
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShareSettingsModal;
