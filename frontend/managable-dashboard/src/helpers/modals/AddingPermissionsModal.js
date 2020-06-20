import React from 'react';
import { Button, Form, Modal, Col } from 'react-bootstrap';

const AddingPermissionsModal = ({
  showAddPermissionModal,
  handleAddPermissionModalClose,
  handleAdPermissionModalSave,
  canAddList,
  setAddPermission
}) => {
  return (
    <Modal
      show={showAddPermissionModal}
      onHide={handleAddPermissionModalClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Adding Permissions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Row>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
            >
              <Form.Label>Progress Bar</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch-progress"
                checked={canAddList.some((i) => i === 'progressbar')}
                onChange={(val) => {
                  setAddPermission(val.target.checked, 'progressbar');
                }}
                label=""
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
            >
              <Form.Label>Leaderboard</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch-leader"
                checked={canAddList.some((i) => i === 'leaderboard')}
                onChange={(val) => {
                  setAddPermission(val.target.checked, 'leaderboard');
                }}
                label=""
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
            >
              <Form.Label>Point (Text)</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch-textpoint"
                checked={canAddList.some((i) => i === 'textpoint')}
                onChange={(val) => {
                  setAddPermission(val.target.checked, 'textpoint');
                }}
                label=""
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
            >
              <Form.Label>Pie Chart</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch-pie"
                checked={canAddList.some((i) => i === 'piechart')}
                onChange={(val) => {
                  setAddPermission(val.target.checked, 'piechart');
                }}
                label=""
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
            >
              <Form.Label>Badge</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch-badge"
                checked={canAddList.some((i) => i === 'badge')}
                onChange={(val) => {
                  setAddPermission(val.target.checked, 'badge');
                }}
                label=""
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleAddPermissionModalClose}
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleAdPermissionModalSave}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddingPermissionsModal;
