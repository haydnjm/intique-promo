import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  height: 100px;
  width: 100%;
  background-color: rgb(59, 66, 76);
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`;

const Footer = () =>
  <FooterDiv>
    Footer
  </FooterDiv>;

export default Footer;
