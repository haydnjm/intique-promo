import React from 'react';
import { ContentPage, ContentImage, ContentText } from './StyledComponents';

const Why = () =>
    <ContentPage>
      <ContentImage src="/images/paler/heads.svg" alt="what's different?" />
      <ContentText>
        <p>
          There are many other great places online to find that G-Plan sideboard,
          those Verner Panton chairs, or that 16<sup>th</sup> century refectory
          table. So why come to us?
        </p>
        <p>
          One of the main reasons we started Intique was so that we could
          promote the independent businesses whose passion it
          is to source these amazing pieces. Because we don't take any commission,
          we can encourage sellers to sell however they want.
        </p>
        <p>
          Every business has its own personality, we want to embrace that.
          At Intique you can really get to know who you are buying from, and
          find the seller who can help you to create your ideal interior.
        </p>
      </ContentText>
    </ContentPage>;

export default Why;
