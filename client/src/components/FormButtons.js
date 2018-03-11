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
  height: 150px;
  width: 150px;
  text-align: center;
  margin: 50px;
  overflow: hidden;

  border: none;
  border-radius: 10px;
  background-color: rgba(59, 66, 76, 0.5);
  color: #ddd;
  box-shadow: 0px 3px 15px rgba(10,10,20,0.75);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const FormButtons = (props) =>
  <Buttons>
    <FormButton to="/who-are-we">
      <img src='/images/whoarewe.svg' alt="about"/>
    </FormButton>
    <FormButton to="/enter-competition">
      <img src='/images/competition.svg' alt="competition"/>
    </FormButton>
    <FormButton to="/dealer-signup">
      <img src='/images/shopfront.svg' alt="dealer signup"/>
    </FormButton>
  </Buttons>;

export default FormButtons;
