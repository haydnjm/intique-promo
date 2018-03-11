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

  border: none;
  border-radius: 10px;
  background-color: rgba(59, 66, 76, 0.5);
  color: #ddd;
`;

const FormButtons = (props) =>
  <Buttons>
    <FormButton to="/enter-competition">
      Enter our competition
    </FormButton>
    <FormButton to="/dealer-signup">
      Signup to become a dealer
    </FormButton>
  </Buttons>;

export default FormButtons;
