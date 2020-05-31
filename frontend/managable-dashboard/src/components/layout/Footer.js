import React from 'react';
import { Row, Card } from 'react-bootstrap';

const Footer = () => {
  return (
    <Row className="footer">
      <Card className="w-100">
        <Card.Body>This is footer area.</Card.Body>
      </Card>
    </Row>
  );
};

export default Footer;
