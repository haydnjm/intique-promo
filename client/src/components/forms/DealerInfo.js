import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 40%;
  min-width: 600px;
  margin: 0 auto;
  font-weight: light;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  text-align: ${props => props.reverse ? 'right' : 'left'};
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const DealerInfo = (props) =>
  <Wrapper>
    <h1>How the website will work:</h1>
    <Row>
      <img src='./images/boutiques.svg' alt="boutiques"/>
      <Content>
        <h3>1. Get your boutique</h3>
        <p>
          Rent a boutique that's the right size for your business. With a fixed
          monthly fee you know exactly where you stand each month, and you can scale
          your boutique up as your inventory grows.
        </p>
      </Content>
    </Row>
    <Row reverse>
      <img src='./images/personal.svg' alt="personal"/>
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
      <img src='./images/no-commission.svg' alt="no commission"/>
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
      <h2>
        For more information about how Intique works,
        take a look <StyledLink to="/about/what-is-intique">here!</StyledLink>
      </h2>
    </div>
  </Wrapper>;

export default DealerInfo;
