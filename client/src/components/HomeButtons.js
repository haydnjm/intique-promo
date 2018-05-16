import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
`;

const FormButton = styled(Link)`
  height: 175px;
  width: 175px;
  position: relative;
  text-align: center;
  margin: 50px;
  overflow: hidden;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgba(10,10,20,0.75);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    margin: 50px 10px 50px 10px;
  }

`;

const FormButtonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit-cover;
`;

const Mask = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 10px;
  position: absolute;
  display: flex;
  align-items: center;
  background-color: rgba(37,38,40,0.98);
  color: #f2e482;
  opacity: 0;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const GlassImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit-cover;
  background-color: rgba(45,47,49, .5);
`;

const HomeButtons = (props) => {

  const scrollToTop = () => window.scrollTo(0, 0);

  return <div>
    <Buttons>
      <FormButton to="/enter-competition">
        <Mask onClick={scrollToTop}>
          <h3>
            Enter our competition for your chance to win the next stylish addition to your home!
          </h3>
        </Mask>
        <FormButtonImage src='/images/paler/competition.svg' alt="competition"/>
      </FormButton>
      <FormButton to="/about/what-is-intique">
        <Mask onClick={scrollToTop}>
          <h2>
            What is Intique?
          </h2>
        </Mask>
        <GlassImg src='/images/paler/logo.svg' alt="about"/>
      </FormButton>
      <FormButton to="/dealer-signup">
        <Mask onClick={scrollToTop}>
          <h3>
            Sign up now to sell with Intique for when we launch in September, and get 2 months free subscription!
          </h3>
        </Mask>
        <FormButtonImage src='/images/paler/shopfront.svg' alt="dealer signup"/>
      </FormButton>
    </Buttons>
  </div>;
};

export default HomeButtons;
