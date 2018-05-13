import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 95%;
  max-width: 450px;
`;

const Anchor = styled.a`
  color: white;

  &:hover {
    cursor: pointer;
  }
  &:visited {
    color: white;
  }
`;

const LampLink = styled.span`
  text-decoration: underline;
  color: white;
  display: inline-block;
  margin: 0;

  &:hover {
    cursor: pointer;
  }
`;

const Banner = styled.img`
  display: block;
  width: 95%;
  max-width: 500px;
  margin: 35px auto 35px;
`;

const Panel =  styled.div`
width: 450px;
margin: auto;
border-radius: 10px;
background-color: #3b424c;
box-shadow: 0px 3px 15px rgba(0,0,0,0.75);
padding: 20px 50px 20px 50px;
margin-bottom: 40px;
`;

const Sub = styled.div`
  width: 95%;
  max-width: 450px;
`;

const CompetitionHeader = ({ showLamp, hideLamp }) =>
<div>
  <Banner src='./images/banner.svg' />
  <Panel>
    <div>
      Enter your details below and like
      our <Anchor target='_blank' href='https://www.facebook.com/intiqueuk/'>Facebook page</Anchor> for
      your chance to win one of our three prizes. If you're
      our lucky winner you can choose the piece that you think would bring the
      most to your interior - and we'll even pay for shipping*, so there's nothing to lose!
    </div>
    <Sub><sub>*within the UK</sub></Sub>
  </Panel>
</div>;

export default CompetitionHeader;
