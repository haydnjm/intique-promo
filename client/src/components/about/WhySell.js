import React from 'react';
import { ContentPage, ContentImage, ContentText } from './StyledComponents';

const WhySell = (props) =>
    <ContentPage>
      <ContentImage src="/images/paler/chat.svg" alt="Why sell with us?" />
      <ContentText>
        <p>
          At Intique, we want buyers to know where, and who, they have bought the pieces
          that they love from.
        </p>
        <p>
          This is something that you don't get from sales with our commission-based
          competitors. Here&apos;s how we aim to acheive it:
        </p>
        <ul>
          <li>Personalised boutiques - put your stamp on your sales</li>
          <li>Sell <b><u>your</u></b> way - through us, through your website, or in person</li>
          <li>Operate <b><u>your</u></b> way - take offers, organise viewings, access Trader-Only features</li>
        </ul>
      </ContentText>
    </ContentPage>;

export default WhySell;
