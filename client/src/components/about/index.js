import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, Switch } from 'react-router-dom';

import What from './What';
import Why from './Why';
import WhySell from './WhySell';
import WhyBuy from './WhyBuy';
import Who from './Who';
import NotFound from '../NotFound';

const Container = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: 50px auto;
`;

const Tabs = styled.div`
  width: 100%;
  max-width: 1000px;
  display: block;
  margin: auto;

  @media (min-width: 1250px) {
    display: flex;
  }
`;

const Tab = styled(NavLink)`
  box-sizing: border-box;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  color: #f1ff5e;
  text-decoration: none;
  background-color: rgba(25,26,28,.5);
  border-bottom: 2px solid #5858a3;
`;

const activeStyle = { backgroundColor: '#5858a3' };

const Content = styled(Switch)`
  margin: 0 auto;
`;

const About = () =>
  <Container>
    <Tabs>
      <Tab activeStyle={activeStyle} to="/about/what-is-intique">
        What is Intique?
      </Tab>
      <Tab activeStyle={activeStyle} to="/about/just-another-marketplace">
        Isn't this just another online furniture marketplace?
      </Tab>
      <Tab activeStyle={activeStyle} to="/about/why-sell-with-us">
        Why sell with Intique?
      </Tab>
      <Tab activeStyle={activeStyle} to="/about/why-buy-with-us">
        Why buy with Intique?
      </Tab>
      <Tab activeStyle={activeStyle} to="/about/who-are-we">
        A bit about us
      </Tab>
    </Tabs>
    <Content>
      <Route exact path="/about" component={ What } />
      <Route path="/about/what-is-intique" component={ What } />
      <Route path="/about/just-another-marketplace" component={ Why } />
      <Route path="/about/why-sell-with-us" component={ WhySell } />
      <Route path="/about/why-buy-with-us" component={ WhyBuy } />
      <Route path="/about/who-are-we" component={ Who } />
      <Route component={ NotFound } />
    </Content>
  </Container>;

export default About;
