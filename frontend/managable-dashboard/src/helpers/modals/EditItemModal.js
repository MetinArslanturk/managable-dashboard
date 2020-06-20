import React from 'react';
import { Button, Form, Modal, Col } from 'react-bootstrap';

const EditItemModal = ({
  showEditModal,
  handleEditModalClose,
  editElement,
  setEditElement,
  handleEditModalSave
}) => {
  return (
    <Modal show={showEditModal} onHide={handleEditModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Row>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
            >
              <Form.Label>Is Draggable</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch-drag"
                checked={editElement.isDraggable}
                onChange={(val) => {
                  setEditElement({
                    ...editElement,
                    isDraggable: val.target.checked
                  });
                }}
                label=""
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
            >
              <Form.Label>Is Resizable</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch-resize"
                checked={editElement.isResizable}
                onChange={(val) => {
                  setEditElement({
                    ...editElement,
                    isResizable: val.target.checked
                  });
                }}
                label=""
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
            >
              <Form.Label>Is Removable</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch-remove"
                checked={editElement.canRemove}
                onChange={(val) => {
                  setEditElement({
                    ...editElement,
                    canRemove: val.target.checked
                  });
                }}
                label=""
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleEditModalClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditModalSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditItemModal;
