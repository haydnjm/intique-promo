import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = styled(Link)`
  display: block;
  position: absolute;
  top: 30px;
  left: 30px;
  width: 50px;
  height: 50px;
  color: #ffeb59;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1250px) {
    position: static;
    margin: 10px auto 10px;
  }
`;

const HomeButton = () =>
 <Home to="/"><img src="/images/paler/back.svg" alt="back" /></Home>;

export default HomeButton;
