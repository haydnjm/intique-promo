import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

import HomeButton from './general/HomeButton';
import HomeButtons from './HomeButtons';
import Competition from './forms/Competition';
import DealerSignup from './forms/DealerSignup';
import About from './about/';
import Footer from './Footer';
import NotFound from './NotFound';

import Nunito from 'typeface-nunito';

injectGlobal`
  @font-face {
    font-family: Nunito;
    src: url('${Nunito}') format('truetype');
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  padding-bottom: 150px;
  position: relative;
  width: 100%;
  overflow: hidden;
  font-family: Nunito;
  min-height: 100vh;
  margin: 0;
  background-color: #34363a;
  color: #f2e482;
  background-image: url('/images/paler/bg3.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const Banner = styled.img`
  width: 40%;
  min-width: 300px;
  display: block;
  margin: 50px auto 50px;

`;
// @media (max-width: 600px) {
//   width: 200%;
//   margin-left: -50%;
// }

const Content = styled.div`
  position: relative;
`;

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Link to="/"><Banner src="/images/paler/simple title.svg" alt="banner" /></Link>
          <Content>
            <Switch>
              <Route exact path="/" component={ HomeButtons } />
              <Route path="/dealer-signup" component={ DealerSignup }/>
              <Route path="/about" component={ About }/>
              <Route component={ NotFound } />
            </Switch>
            <Route path='/([\S]+)' component={ HomeButton } />
          </Content>
          <Footer />
        </Container>
      </BrowserRouter>
    );
  };
}

export default App;
