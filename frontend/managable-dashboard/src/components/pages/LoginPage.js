import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { baseHref } from '../../configs/config';
import { login } from '../../actions/auth';

const LoginPage = ({ isAuth, loginAction }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const {
      emailControl: { value: email },
      passwordControl: { value: password }
    } = event.target.elements;

    loginAction(email, password);
  };
  return (
    <>
      {isAuth ? (
        <>
          <Redirect to={baseHref} />
        </>
      ) : (
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
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.user._id
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (email, password) => dispatch(login(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
