import styled from 'styled-components';

export const ContentPage = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(52, 54, 58, .5);
`;

export const ContentImage = styled.img`
  flex: 1 1 0;
  width: 200px;
  height: 200px;
  margin: 40px 0 40px 0;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const ContentText = styled.div`
  flex: 2 1 0;
  padding: 20px;
`;
