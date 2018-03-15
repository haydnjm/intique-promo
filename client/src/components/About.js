import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: auto;

  display: flex;
  flex-wrap: wrap;
  color: white;
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

const Column = styled.div`
  width: 50%;
  min-width: 500px;
`;

const InfoGraph = styled.img`

`;

const About = () =>
  <Container>
    <Column>
      <Row>
        <InfoGraph src="/images/heads.svg" />
        <Content>
          <h2>What is Intique?</h2>
          <p>
            At Intique we're building an online marketplace for vintage,
            mid-century and antique furnishings. One of the hundreds of independent
            sellers/businesses across the UK has the exact style for you, and we
            want to help you find them.
          </p>
          <p>
            But Initque isn't just about buying and selling
            furniture. It's about connecting people, supporting independent
            businesses, and helping people to find the perfect addition to their
            home. Ranging from traditional furnishings to mid-century and
            modernist, we're sure you will find what you’re looking for on/at/from Intique.
          </p>
        </Content>
      </Row>
      <Row>
        <InfoGraph src="/images/heads.svg" />
        <Content>
          <h2>Isn't this just another online furniture marketplace?</h2>
          <p>
            There are many other great places online to find that G-Plan sideboard,
            those Verner Panton chairs, or that Danish Teak coffee table. So why
            come to us?
          </p>
          <p>
            We're all about promoting the independent businesses whose passion it
            is to source these amazing pieces. Because we don't take any commission,
            we don't have to force their sales through our website. We can promote our
            sellers, and allow them to sell the way they want, <i>1 - whether that
            be through our website, through their own website, or in person! </i>**OR** <i>
            2 - meaning you can really get to know who you are buying from, and
            find the sellers that *love the stuff you love*</i>
          </p>
        </Content>
      </Row>
    </Column>

    <Column>
      <Row>
        <InfoGraph src="/images/heads.svg" />
        <Content>
          <h2>Why sell with us?</h2>
          <p>
            At Intique, we want buyers to say "we found it on Intique, we bought
            it from *your business*", something that you don't get
            from sales with our commission-based competitors. Here's how we aim
            to acheive it:
          </p>
          <ul>
            <li>Personalised boutiques - put your stamp on your sales</li>
            <li>Sell <b><u>your</u></b> way - through us, through your website, or in person</li>
            <li></li>
          </ul>
        </Content>
      </Row>
      <Row>
        <InfoGraph src="/images/heads.svg" />
        <Content>
          <h2>Why buy with Intique?</h2>
          <p>
            We know how time consuming it can be to find that perfect
            piece of vintage furniture for your home, whilst picking a seller that you
            can trust. Here at Intique we verify all of our sellers, so you that know you are
            buying from someone you can trust. We aim to bring the best independent
            dealers from across the UK to one place, and strive to give our
            buyers a user experience like no other.
          </p>
        </Content>
      </Row>
      <Row>
        <InfoGraph src="/images/heads.svg" />
        <Content>
          <h2>***A bit about us?***</h2>
          <p>
            Maybe a short paragraph about us?
          </p>
        </Content>
      </Row>
    </Column>
  </Container>;

export default About;
