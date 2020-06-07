import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MainContent from './components/layout/MainContent';

const App = ({ setInitialLayout }) => {
  useEffect(() => {
    setInitialLayout();
  }, [setInitialLayout]);

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

const mapDispatchToProps = (dispatch) => ({
  setInitialLayout: () =>
    dispatch({
      type: 'INIT_LAYOUT',
      userId: '5edccdbdcf585f3f4044a363'
    })
});

export default connect(undefined, mapDispatchToProps)(App);
