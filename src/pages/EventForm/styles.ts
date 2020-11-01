import styled, { keyframes } from 'styled-components';

import CreateBackgroundImg from '../../assets/Create.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  animation: ${appearFromRight} 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 30px 0;
    width: 440px;

    @media (max-width: 450px) {
      margin: 5px 0;
      width: 300px;
    }

    text-align: center;
    p {
      margin: 5px 0;
    }

    h1 {
      margin-bottom: 24px;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    button {
      margin: 5px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${CreateBackgroundImg}) no-repeat center;
  background-size: cover;
`;
