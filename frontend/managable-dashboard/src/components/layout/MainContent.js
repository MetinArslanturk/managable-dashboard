import React from 'react';
import { Row, Card } from 'react-bootstrap';
import AppRouter from '../../routers/AppRouter';

const MainContent = () => {
  return (
    <Row className="main-content">
      <Card className="w-100">
        <Card.Body>
          <AppRouter />
        </Card.Body>
      </Card>
    </Row>
  );
};

export default MainContent;
