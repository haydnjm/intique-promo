import React from 'react';

import { ContentPage, ContentImage, ContentText } from './StyledComponents';

const What = (props) =>
    <ContentPage>
      <ContentImage src="/images/paler/boutiques.svg" alt="heads"/>
      <ContentText>
        <p>
          At Intique we're building an online marketplace for vintage,
          mid-century and antique furnishings. One of the many independent
          sellers across the UK has the exact style and products that you’ve
          been looking for, our job is to find them and make the experience as
          easy and enjoyable as possible for all of our users.
        </p>
        <p>
          But Intique isn't just about buying and selling
          furniture. It's about connecting people, supporting independent
          businesses, and helping people to find the perfect addition to their
          home. Knowing who you're buying from has become a thing of the past.
          We want to bring the personal touch back to buying furniture.
        </p>
      </ContentText>
    </ContentPage>;

export default What;
