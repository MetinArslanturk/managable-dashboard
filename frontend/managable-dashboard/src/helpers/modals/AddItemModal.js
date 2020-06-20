import React, { useState } from 'react';
import { Button, Form, Modal, Col } from 'react-bootstrap';

const AddItemModal = ({
  showAddItemModal,
  handleAddItemModalClose,
  handleAddItemModalSave,
  canAddList
}) => {
  const [selectedValue, setSelectedValue] = useState('select');
  const handleChangeValue = (val) => {
    setSelectedValue(val.target.value);
  };
  const showOption = (option) => {
    return canAddList.some((opt) => opt === option);
  };
  return (
    <Modal show={showAddItemModal} onHide={handleAddItemModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Row>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
            >
              <Form.Label>Select Item Type</Form.Label>
              <Form.Control
                value={selectedValue}
                as="select"
                onChange={handleChangeValue}
              >
                <option value="select">Select</option>
                {showOption('progressbar') && (
                  <option value="progressbar">Progress Bar</option>
                )}
                {showOption('leaderboard') && (
                  <option value="leaderboard">Leaderboard</option>
                )}
                {showOption('textpoint') && (
                  <option value="textpoint">Point (Text)</option>
                )}
                {showOption('piechart') && (
                  <option value="piechart">Pie Chart</option>
                )}
                {showOption('badge') && (
                  <option value="badge">Badge</option>
                )}
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleAddItemModalClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            if (selectedValue !== 'select') {
              handleAddItemModalSave(selectedValue);
            }
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddItemModal;
