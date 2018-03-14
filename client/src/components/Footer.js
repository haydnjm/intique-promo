import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterDiv = styled.div`
  height: 120px;
  width: 100%;
  background-color: rgb(59, 66, 76);
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`;

const FooterImg = styled.img`
  height: 80px;
  margin-top: 10px;
`;

const Footer = () =>
  <FooterDiv>
    <Link to="/"><FooterImg src="/images/logo.svg" alt="logo"/></Link>
  </FooterDiv>;

export default Footer;
