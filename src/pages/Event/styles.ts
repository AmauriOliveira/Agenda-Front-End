import styled, { keyframes } from 'styled-components';

import CreateBackgroundImg from '../../assets/Create.jpg';
import Tooltip from '../../components/Tooltip';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    animation: ${appearFromLeft} 1s;
    margin: 30px 0;
    width: 440px;
    text-align: center;

    p {
      margin: 5px 0;
    }

    strong {
      font-weight: bold;
      font-size: 30px;
      line-height: 30px;
      margin-top: 20 0px;
      font-family: sans-serif;
      color: #6600cc;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      button {
        margin: 20px 10px;
      }
    }
  }
  header {
    position: absolute;
    width: 100%;
    max-width: 500px;
    top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  }
`;

export const View = styled.section`
  animation: ${appearFromRight} 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffcc;
  width: 100%;
  max-width: 500px;
  padding: 16px;
  border-radius: 8px;

  > strong {
    font-weight: bold;
    font-size: 30px;
    line-height: 30px;
    margin-top: 16px;
    font-family: sans-serif;
    color: #6600cc;
  }

  > span {
    font-size: 24px;
    line-height: 30px;
    margin-top: 16px;
    color: #000;
  }
  > p {
    line-height: 30px;
    margin-top: 16px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    button {
      margin: 20px 10px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${CreateBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const Label = styled(Tooltip)`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    flex: 1;
    background: #c53030;
    color: #fff;
    bottom: calc(80% - 12px);
    left: 50%;
    transform: translate(-50%);
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
