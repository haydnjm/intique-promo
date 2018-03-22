import React from 'react';
import styled, { keyframes } from 'styled-components';

const floatUp = keyframes`
  from {
    transform: translateY(100vh);
  }

  to {
    transform: translateY(0vh);
  }
`;

const Image = styled.img`
  width: 95%;
  max-width: 300px;
  position: absolute;
  top: 50px;
  right: 50px;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.75);

  animation: ${floatUp} .3s cubic-bezier(.25,.82,.41,.99);
`;

const FloatingImage = ({ src }) =>
  <Image src={src} />;

export default FloatingImage;
