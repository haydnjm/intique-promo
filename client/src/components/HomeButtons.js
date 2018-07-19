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

  border-top: 5px solid #999;
  border-left: 5px solid #999;
  border-bottom: 5px solid #222;
  border-right: 5px solid #222;
  border-radius: 15px;
  box-shadow: 10px 10px 25px 5px rgba(10,10,20,0.9);
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
            Are you an independent furniture dealer? See how we can help you sell how <em>you</em> want to sell.
          </h3>
        </Mask>
        <FormButtonImage src='/images/paler/shopfront.svg' alt="dealer signup"/>
      </FormButton>
    </Buttons>
  </div>;
};

export default HomeButtons;

// <FormButton to="/win">
//   <Mask onClick={scrollToTop}>
//     <h3>
//       Enter our competition for your chance to win the next stylish addition to your home!
//     </h3>
//   </Mask>
//   <FormButtonImage src='/images/paler/competition.svg' alt="competition"/>
// </FormButton>
