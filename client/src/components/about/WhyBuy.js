import React from 'react';
import { ContentPage, ContentImage, ContentText } from './StyledComponents';

const WhyBuy = (props) =>
    <ContentPage>
      <ContentImage src ="/images/paler/shopping-bag.svg" alt="why buy with intique?" />
      <ContentText>
        <p>
          We know how time consuming it can be to find that perfect
          piece of vintage furniture for your home, whilst picking a seller that you
          can trust.
        </p>
        <p>
          At Intique we work closely with our sellers so to provide a hassle-free
          buying experience. We know how important it is that you can trust who you are
          buying from, so we make sure that we get to know anyone who wants to sell with us.
        </p>
        <p>
          We aim to bring the best independent
          sellers from across the UK to one place, and strive to give our
          buyers a user experience like no other.
        </p>
      </ContentText>
    </ContentPage>;

export default WhyBuy;
