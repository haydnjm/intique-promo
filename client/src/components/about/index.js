import React from 'react';
import styled from 'styled-components';
import { Route, Link, Switch } from 'react-router-dom';

import What from './What';
import Why from './Why';
import WhySell from './WhySell';
import WhyBuy from './WhyBuy';
import Who from './Who';
import NotFound from '../NotFound';

const Container = styled.div`
  width: 1000px;
  margin: 50px auto;
  border: red solid 1px;
`;

const Tabs = styled.div`
width: 1000px;
display: flex;
margin: auto;
border: green solid 1px;
`;

const Tab = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 50px;
`;

const Content = styled(Switch)`
  width: 1000px;
  margin: 0 auto;
  border: blue solid 1px;
`;

const ContentPage = styled(Route)`

`;

const NewAbout = () =>
  <Container>
    <Tabs>
      <Tab to="/about-new/what-is-intique">What is Intique?</Tab>
      <Tab to="/about-new/just-another-marketplace">Isn't this just another online furniture marketplace?</Tab>
      <Tab to="/about-new/why-sell-with-us">Why sell with us?</Tab>
      <Tab to="/about-new/why-buy-with-us">Why buy with Intique?</Tab>
      <Tab to="/about-new/who-are-we">***A bit about-new us?***</Tab>
    </Tabs>
    <Content>
      <Route exact path="/about-new" component={ What } />
      <Route path="/about-new/what-is-intique" component={ What } />
      <Route path="/about-new/just-another-marketplace" component={ Why } />
      <Route path="/about-new/why-sell-with-us" component={ WhySell } />
      <Route path="/about-new/why-buy-with-us" component={ WhyBuy } />
      <Route path="/about-new/who-are-we" component={ Who } />
      <Route component={ NotFound } />
    </Content>
  </Container>;

export default NewAbout;
