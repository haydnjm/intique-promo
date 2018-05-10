import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import PrizeTile from './PrizeTile';

const PrizesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0;
  justify-content: center;
  min-width: 450px;
`;

const prizes = [
  {
    image: '/images/chair1.jpg',
    alt: 'chair prize',
    title: 'Vitra Chair',
    description: `
      This is a vitra chair it is grey and round this is a
      description of the chair it was made by vitra and is good for these reasons.
      The chair would go great into setting one or maybe setting two. 42 words.
    `,
    dimensions: '12cm x 34cm x 56cm',
  },
  {
    image: '/images/lamp1.jpg',
    title: 'Bespoke Industrial Lamp',
    description: `
    `,
    dimensions: '12cm x 34cm x 56cm',
  },
  {
    image: '/images/table1.jpg',
    title: 'Danish Teak Coffee Table',
    description: `
    `,
    dimensions: '12cm x 34cm x 56cm',
  },
];

const Prizes = () =>
  <PrizesContainer>
    {
      _.map(prizes, prize =>
        <PrizeTile
          key={prize.title}
          image={prize.image}
          title={prize.title}
          alt={prize.alt}
          description={prize.description}
          dimensions={prize.dimensions}
          />)
    }
  </PrizesContainer>;

export default Prizes;
