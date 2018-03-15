import React from 'react';

import { ContentPage, ContentImage, ContentText } from './StyledComponents';

const WhySell = (props) =>
    <ContentPage>
      <ContentImage src="/" alt="Why sell with us?" />
      <ContentText>
        <p>
          At Intique, we want buyers to tell the admirers of your products
          "we found it on Intique, we bought it from **your business**".
        </p>
        <p>
          This is something that you don't get from sales with our commission-based
          competitors. Here's how we aim to acheive it:
        </p>
        <ul>
          <li>Personalised boutiques - put your stamp on your sales</li>
          <li>Sell <b><u>your</u></b> way - through us, through your website, or in person</li>
          <li>Operate <b><u>your</u></b> way - take offers, organise viewings, access Trader-Only features</li>
        </ul>
      </ContentText>
    </ContentPage>;

export default WhySell;
