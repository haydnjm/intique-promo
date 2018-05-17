import React from 'react';
import styled from 'styled-components';


const Anchor = styled.a`
  color: white;

  &:hover {
    cursor: pointer;
  }
  &:visited {
    color: white;
  }
`;

const Banner = styled.img`
  display: block;
  width: 95%;
  max-width: 500px;
  margin: 35px auto 35px;
`;

const Panel =  styled.div`
box-sizing: border-box;
width: 95%;
max-width: 500px;
margin: auto;
border-radius: 10px;
background-color: #3b424c;
box-shadow: 0px 3px 15px rgba(0,0,0,0.75);
padding: 20px 30px 20px 30px;
margin-bottom: 40px;
`;

const Sub = styled.div`
  width: 95%;
  max-width: 450px;
`;

const CompetitionHeader = ({ showLamp, hideLamp }) =>
<div>
  <Banner src='./images/paler/banner.svg' />
  <Panel>
    <p>
      Enter your details below for your chance to win one of our
      three prizes. If you're our lucky winner you can choose the piece that
      you think would bring the most to your interior - and we'll even pay for
      shipping*, so there's nothing to lose!
    </p>
    <p>
      To double your chances of winning, like our <Anchor target='_blank' href='https://www.facebook.com/intiqueuk/'>
      competition post on our facebook page</Anchor>, and we'll count the like as a
      second entry!
    </p>
    <p>
      Our winner will be announced on Friday the 13th of July. It might as
      well be lucky for someone...
    </p>
    <Sub><sub>*within the UK</sub></Sub>
  </Panel>
</div>;

export default CompetitionHeader;
