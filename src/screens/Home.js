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
  background-color: greenyellow;
  @media (max-width: 1000px) and (min-width: 700px) {
    background-color: blue;
  }
`;

export default function Home() {
  return (
    <MainContainer>
      <p>Home Screen</p>
      <Link to="/coins">Go to Coins</Link>
      <Link to="/profile">Go to Profile</Link>
    </MainContainer>
  );
}
