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
  background-color: green;
  @media (max-width: 1000px) and (min-width: 700px) {
    background-color: purple;
  }
`;

export default function Profile() {
  return (
    <MainContainer>
      <p>Profile Screen</p>
      <Link to="/">Go to Home</Link>
      <Link to="/coins">Go to Coins</Link>
    </MainContainer>
  );
}
