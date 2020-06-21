import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { baseHref } from '../../configs/config';
import { logout } from '../../actions/auth';

const Header = ({ isAuth, isTeacher, name, logoutAction }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to={`${baseHref}`}>Dashboardification</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {isAuth ? (
          <>
            <Navbar.Text className="signed-text">
              Welcome, {name}
            </Navbar.Text>
            {isTeacher && (
              <Navbar.Text style={{ marginLeft: '5px' }}>
                <Link to={`${baseHref}manage/students`}>
                  Students
                </Link>
              </Navbar.Text>
            )}
            <Navbar.Text>
              <Button variant="link" onClick={logoutAction}>
                Logout
              </Button>
            </Navbar.Text>
          </>
        ) : (
          <></>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.user._id,
  isTeacher: !!state.auth.user.isTeacher,
  name: state.auth.user.name
});

const mapDispatchToProps = (dispatch) => ({
  logoutAction: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
