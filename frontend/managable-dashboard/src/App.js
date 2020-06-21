import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MainContent from './components/layout/MainContent';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'CHECK_LOGIN' });
  }, [dispatch]);
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

export default connect(undefined)(App);
