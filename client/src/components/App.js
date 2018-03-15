import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

import FormButtons from './FormButtons';
import Competition from './forms/Competition';
import DealerSignup from './forms/DealerSignup';
import About from './about/';
import Footer from './Footer';
import NotFound from './NotFound';

import Nunito from 'typeface-nunito';

injectGlobal`
  @font-face {
    font-family: Nunito;
    src: url('${Nunito}') fromat('truetype');
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  padding-bottom: 150px;
  position: relative;
  width: 100%;
  font-family: Nunito;
  min-height: 100vh;
  margin: 0;
  background-color: #252628;
  color: #eddd4f;
  background-image: url('/images/bg2.svg');
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
          <Switch>
            <Route exact path="/" component={FormButtons} />
            <Route path="/enter-competition" component={ Competition }/>
            <Route path="/dealer-signup" component={ DealerSignup }/>
            <Route path="/about" component={ About }/>
            <Route component={ NotFound } />
          </Switch>
          <Footer />
        </Container>
      </BrowserRouter>
    );
  };
}

// export default connect(null, actions)(App);

export default App;
