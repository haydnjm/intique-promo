import React from 'react';

import { ContentPage, ContentImage, ContentText } from './StyledComponents';

const What = (props) =>
    <ContentPage>
      <ContentImage src="/images/heads.svg" alt="heads"/>
      <ContentText>
        <p>
          At Intique we're building an online marketplace for vintage,
          mid-century and antique furnishings. One of the hundreds of independent
          **sellers/businesses** across the UK has the exact style for you, and we
          want to help you find them.
        </p>
        <p>
          But Initque isn't just about buying and selling
          furniture. It's about connecting people, supporting independent
          businesses, and helping people to find the perfect addition to their
          home. Ranging from traditional furnishings to mid-century and
          modernist, we're sure you will find what you’re looking for **on/at/from** Intique.
        </p>
      </ContentText>
    </ContentPage>;

export default What;
