import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MainContent from './components/layout/MainContent';

const App = () => {
  return (
    <Container fluid="xl">
      <div className="main-container">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Container>
  );
};

export default App;
