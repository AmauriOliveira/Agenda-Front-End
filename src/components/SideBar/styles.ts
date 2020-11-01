import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';
import Tooltip from '../Tooltip';

interface MenuProps {
  isVisible: boolean;
}

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

export const Label = styled(Tooltip)`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    flex: 1;
    background: #ebf8ff;
    color: #3172b7;
    bottom: calc(80% - 12px);
    left: 50%;
    transform: translate(-50%);
    &::before {
      border-color: #ebf8ff transparent;
    }
  }
`;

export const Content = styled.div<MenuProps>`
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 15%;
  position: fixed;
  height: 100%;
  min-width: 150px;
  max-width: 250px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  background: #6a57cc;

  .menu {
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${props => (props.isVisible ? 'flex-end' : 'center')};

    button {
      padding: 4px;
      visibility: collapse;
      border: 0;
      background: #6600cc;
      border-radius: 4px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#6600cc')};
      }

      @media (max-width: 450px) {
        visibility: visible;
      }
    }
  }

  header {
    display: flex;
    padding: 6px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;

    p {
      color: #b0e0e6;
    }

    strong {
      color: #fff;
      margin: 12px 0;
      font-weight: bold;
      font-size: 18px;
    }

    @media (max-width: 450px) {
      visibility: ${props => (props.isVisible ? 'visible' : 'collapse')};
    }
  }

  section {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 16px;

    button {
      width: 25%;
      min-width: 120px;
      height: 40px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 450px) {
      visibility: ${props => (props.isVisible ? 'visible' : 'collapse')};
    }
  }
  @media (max-width: 450px) {
    width: ${props => (props.isVisible ? '15%' : '10%')};
    min-width: ${props => (props.isVisible ? '150px' : '40px')};
    z-index: 1;
  }
`;
