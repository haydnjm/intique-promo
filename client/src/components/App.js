import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import FormButtons from './FormButtons';
import Competition from './forms/Competition';
import DealerSignup from './forms/DealerSignup';
import Footer from './Footer';

const Container = styled.div`
  box-sizing: border-box;
  padding-bottom: 150px;
  position: relative;
  font-family: 'Helvetica';
  width: 100%;
  min-height: 100vh;
  margin: 0;
  background-color: #252628;
  color: #eddd4f;
  background-image: url('/images/bg1.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const Banner = styled.img`
  margin: 0 0 30px 0;
  width: 100%;
`;

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Link to="/"><Banner src="/images/final1.svg" alt="banner" /></Link>
          <Route exact path="/" component={FormButtons} />
          <div>
            <Route path="/enter-competition" component={ Competition }/>
            <Route path="/dealer-signup" component={ DealerSignup }/>
          </div>
          <Footer />
        </Container>
      </BrowserRouter>
    );
  };
}

// export default connect(null, actions)(App);

export default App;
