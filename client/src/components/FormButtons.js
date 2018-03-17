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
  color: #eddd4f;
  opacity: 0;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const GlassImg = styled.img`
  background-color: rgba(45,47,49, .5);
`;

const FormButtons = (props) =>
  <Buttons>
    <FormButton to="/enter-competition">
      <Mask><h3>Love furniture that's a bit different? Win an industrial lamp to brighten up any space!</h3></Mask>
      <img src='/images/competition.svg' alt="competition"/>
    </FormButton>
    <FormButton to="/about/what-is-intique">
      <Mask><h2>What is Intique?</h2></Mask>
      <GlassImg src='/images/logo.svg' alt="about"/>
    </FormButton>
    <FormButton to="/dealer-signup">
      <Mask><h3>Sign up to become a priority dealer when we launch in July and get 2 months for free!</h3></Mask>
      <img src='/images/shopfront.svg' alt="dealer signup"/>
    </FormButton>
  </Buttons>;

export default FormButtons;
