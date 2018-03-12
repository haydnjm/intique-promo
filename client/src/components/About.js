import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 75%;
  max-width: 600px;
  margin: auto;
`;

const About = () =>
  <Container>
    <h1>About</h1>
    <div>
      <h2>What is Intique?</h2>
      <p>
        At Intique we are building *the first*? boutique style online marketplace
        for vintage, mid-century and antique furniture. Our objective is to
        offer an online marketplace which enables independent businesses to
        thrive and buyers to discover dealers they love. Ranging from
        traditional furnishings to mid-century and modernist, we are sure you
        will find what you’re looking for on Intique.
      </p>
    </div>
    <div>
      <h2>Why sell with Intique?</h2>
      <p>
        We aim to help our sellers grow and offer a variety of tools to help
        them do this. From company branding, shop interfaces, visible contact
        details, a variety of selling packages and no seller commission we
        will do what we can to help you grow your business to where you want
        it to be.
      </p>
    </div>
    <div>
      <h2>Why buy with Intique?</h2>
      <p>
        We know how hard and time consuming it can be finding that perfect
        piece of vintage furniture for your home whilst picking a seller you
        can trust. Here at Intique all are sellers are certified and must meet
        certain criteria before they can sell with us, so you know you are
        buying from a trusted seller. Intique has bought some of the best
        dealers across the UK all to one website for your convenience and have
        also dedicated many hours to give our buyers a user experience like no
        other.
      </p>
    </div>
    <div>
      <h2>***A bit about us?***</h2>
      <p>
        Maybe a short paragraph about us?
      </p>
    </div>
  </Container>;

export default About;

/*
<p>
  Our aim at Intique is provide a seemless, unobstructed
    selling experience for our dealers. We do this buy charging a monthly
    subscription fee. We don't take any commission on your sales and all
    of your profit goes straight to you, the dealer. This means that we don't
    need to force sales through our wesbite by hiding your own website or your
    contact details. Sell your products, sell your brand, keep your profit!
    Sign up to our dealer list today to get priority access to the website
    when it is launched, as well as the first 2 months of your subscription for
    free!
</p>
*/
