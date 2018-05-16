import React from 'react';

import { ContentPage, ContentImage, ContentText } from './StyledComponents';

const What = (props) =>
    <ContentPage>
      <ContentImage src="/images/paler/bricks.svg" alt="heads"/>
      <ContentText>
        <p>
          At Intique we're building an online marketplace for vintage,
          mid-century and antique furnishings. One of the many independent
          sellers across the UK has the exact style and products that you’ve
          been looking for, our job is to find them and make the experience as
          easy and enjoyable as possible for all our users.
        </p>
        <p>
          But Initque isn't just about buying and selling
          furniture. It's about connecting people, supporting independent
          businesses, and helping people to find the perfect addition to their
          home. Ranging from traditional furnishings to mid-century and
          modernist, we're sure you will find what you’re looking for with Intique.
        </p>
      </ContentText>
    </ContentPage>;

export default What;
