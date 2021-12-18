import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: yellow;
  @media (max-width: 1000px) and (min-width: 700px) {
    background-color: orange;
  }
`;

export default function Coins() {
  return (
    <MainContainer>
      <p>Coins Screen</p>
      <Link to="/">Go to Home</Link>
      <Link to="/profile">Go to Profile</Link>
    </MainContainer>
  );
}
