import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContentWrapper = styled.div`
  flex-grow: 2;
  min-width: 300px;
  margin: 0;
  padding-left: 50px;

  width: 90%;
  max-width: 750px;

  @media (max-width: 1250px) {
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  text-align: ${props => props.reverse ? 'right' : 'left'};
  margin: 0 auto 30px;
  max-width: 650px;
`;

const Content = styled.div`
  display: flex;
  min-width: 275px;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  max-width: 60%;

  @media (max-width: 650px) {
    text-align: center;
    max-width: 100%;
  }
`;

const StyledLink = styled(Link)`
  color: white;
`;

const InfoImg = styled.img`
  margin: auto;
  width 150px;
  height: 150px;
`;

const H1 = styled.h2`
  margin: 0 auto;
  max-width: 650px;
  text-align: center;
`;
const H2 = styled.h1`
  margin: 0 auto 30px;
  max-width: 650px;
  text-align: center;
`;

const DealerInfo = (props) =>
  <ContentWrapper>
    <H1>We're building a new subscription based selling platform. Here's how it's going to work:</H1>
    <Row>
      <InfoImg src='./images/paler/boutiques.svg' alt="boutiques"/>
      <Content>
        <h3>1. Get your boutique</h3>
        <p>
          Rent a boutique that's the right size for your business. With a fixed
          monthly subscription you know exactly where you stand each month, and you can scale
          your boutique up as your inventory grows.
        </p>
      </Content>
    </Row>
    <Row reverse>
      <InfoImg src='./images/paler/personal.svg' alt="personal"/>
      <Content>
        <h3>2. Fill your boutique with your products, and give it your personal stamp</h3>
        <p>
          List all of your stock without any listing fees, and personalise your boutique with
          your own business logo, colours and fonts. When someone buys something from
          you, they know it's coming from <strong>your business</strong>.
        </p>
      </Content>
    </Row>
    <Row>
      <InfoImg src='./images/paler/no-commission.svg' alt="no commission"/>
      <Content>
        <h3>3. Sell your products on your terms, with no commission</h3>
        <p>
          The only cost to cover is the payment processing, which comes to 1.5% of your
          gross sales. That's it! No hidden costs, no unpredictable bills or fees
          at the end of each month - you keep all of your profit.
        </p>
      </Content>
    </Row>
    <div>
      <H2>
        For more information about how Intique works,
        take a look <StyledLink to="/about/what-is-intique">here!</StyledLink>
    </H2>
    </div>
  </ContentWrapper>;

export default DealerInfo;
