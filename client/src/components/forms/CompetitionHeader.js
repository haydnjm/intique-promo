import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 450px;
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

const Description = styled.p`
  width: 95%;
  max-width: 450px;
  margin: 0 auto 40px;
`;

const CompetitionHeader = ({ showLamp, hideLamp }) =>
<div>
  <Banner src='./images/banner.svg' />
  <Description>
    Brighten up your home with&nbsp;
    <LampLink
      onMouseOver={showLamp}
      onMouseLeave={hideLamp}
      >
      this green enamel industrial lamp
    </LampLink>
    worth over £150! For your chance to win just enter your details below
    and you'll be entered into the prize draw. We'll send you an email to
    let you know when we'll be drawing the winning ticket and again if you
    are the lucky winner of our prize! (We'll also pay for postage, so you've
    got nothing to lose!)
  </Description>
</div>;

export default CompetitionHeader;
