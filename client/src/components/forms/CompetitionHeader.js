import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 450px;
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

const Description = styled.p`
  width: 95%;
  max-width: 450px;
  margin: 0 auto 40px;
`;

const CompetitionHeader = ({ showLamp, hideLamp }) =>
<div>
  <Banner src='./images/banner.svg' />
  <Description>
    Enter your details below and like
    our <Anchor target='_blank' href='https://www.facebook.com/intiqueuk/'>Facebook page</Anchor> for
    your chance to win one of our three prizes. If you are
    our lucky winner you can choose the piece that you think would bring the
    most to your interior - and we'll even pay for shipping*, so there's nothing to lose!
  </Description>
  <Description><sub>*within the UK</sub></Description>
</div>;

export default CompetitionHeader;
