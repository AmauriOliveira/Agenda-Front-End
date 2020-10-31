import styled from 'styled-components';
import { shade } from 'polished';

import CreateBackgroundImg from '../../assets/Create.jpg';
import Tooltip from '../../components/Tooltip';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
  form {
    margin: 30px 0;
    width: 440px;

    text-align: center;
    p {
      margin: 5px 0;
    }

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #6600cc;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#6600cc')};
      }
    }
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
