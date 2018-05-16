import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const FooterDiv = styled.div`
  height: 120px;
  width: 100%;
  background-color: rgb(59, 66, 76);
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ContentWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  max-width: 500px;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  width: 30px;
  color: #34363a;
`;

const FooterImg = styled.img`
  height: 80px;
  margin-top: 10px;
`;

const A = styled.a`

  transition: all 0.2s ease-in-out;

  &:link {
    color: #34363a;
  }

  &:visited {
    color: #34363a;
  }
  &:hover {
    color: #f2e482;
  }

`;

const Footer = () =>
  <FooterDiv>
    <ContentWrapper>
      <IconWrapper>
        <A target='_blank' href='https://www.instagram.com/intique_uk/'>
          <FontAwesome name='instagram' />
        </A>
      </IconWrapper>
      <Link to="/"><FooterImg src="/images/paler/logo.svg" alt="logo"/></Link>
      <IconWrapper>
        <A target='_blank' href='https://www.facebook.com/intiqueuk/'>
          <FontAwesome name='facebook' />
        </A>
      </IconWrapper>
    </ContentWrapper>
  </FooterDiv>;

export default Footer;
