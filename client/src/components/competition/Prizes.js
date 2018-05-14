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
  font-size: 0.92em;
`;

const prizes = [
  {
    image: '/images/chair1.jpg',
    alt: 'chair prize',
    title: 'Verner Panton C1',
    description: `
      Manufactured by Vitra, dating to the 1950’s/60’s, the chair’s elegant
      base is influenced by Scandinavian Modernism, yet the spherical bucket
      seat has an exciting Pop Art vibe. Working superbly in any interior, the
      C1 offers itself as an unrivalled accent chair.
    `,
    dimensions: 'H: 73.5cm, W: 66cm',
    number: '1',
  },
  {
    image: '/images/lamp1.jpg',
    title: `1940's Machinist Lamp`,
    description: `
      An original 1940’s industrial machinists desk lamp, which has been
      restored ready for its new owner. Its vibrant green enamel shade
      compliments the masculine H bar steel base. Perfect as a desk, bedside
      or sideboard lamp, this is sure to brighten up any space!
    `,
    dimensions: 'Max height – 91cm',
    number: '2',
  },
  {
    image: '/images/table1.jpg',
    title: `1960's Teak Coffee Table`,
    description: `
      1960’s Teak coffee table. With a circular top and cross shaped base,
      this table is true to Scandinavian design. It’s versatility, style and
      simplicity makes it a piece that can easily enhance a wide range of living
      room spaces.
    `,
    dimensions: 'H: 41.5cm, Dia: 76cm',
    number: '3',
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
          number={prize.number}
          />)
    }
  </PrizesContainer>;

export default Prizes;
