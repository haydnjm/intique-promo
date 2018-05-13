import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Tile = styled.div`
  width: 250px;
  height: 250px;
  margin: 0px 40px 40px 40px;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.75);
  position: relative;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
`;

const Mask = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 250px;
  position: absolute;
  background-color: #151618;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  text-align: center;
  padding: 10px;

  &:hover {
    opacity: .9;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
`;
const Number = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 20px;
  height: 20px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #efff4d;
  color: #252628;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrizeTile = ({ image, title, alt, description, dimensions, number }) =>
  <Tile>
    <Info><FontAwesome name='info-circle'/></Info>
    <Number>{number}</Number>
    <Mask>
      <h3>{title}</h3>
      {description}
      <p>{dimensions}</p>
    </Mask>
    <Image src={image} alt={alt} />
  </Tile>;

export default PrizeTile;
