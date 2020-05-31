import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const {
      emailControl: { value: email },
      passwordControl: { value: password },
    } = event.target.elements;

    console.log(email);
    console.log(password);
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-form">
          <Card className="w-100">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="emailControl">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="passwordControl">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <div className="horizontal-center-flex">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
