import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Dashboardification</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Button variant="dark">Students</Button>
        </Navbar.Text>
        <Navbar.Text className="signed-text">
          Signed in as: Mark
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
