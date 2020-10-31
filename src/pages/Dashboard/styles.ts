import styled from 'styled-components';
import Tooltip from '../../components/Tooltip';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    width: 80vw;
    background: linear-gradient(to bottom, #0099cc 0%, #00ccff 100%);
    padding: 16px;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);

    button {
      width: 25%;
      min-width: 120px;
      height: 40px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    @media (max-width: 300px) {
      flex-direction: column;
    }

    @media (max-width: 600px) {
      padding: 4px;

      img {
        width: 40px;
      }

      a {
        width: 20px;
        height: 20px;
        border-radius: 6px;
      }
    }
  }
  footer {
    width: 80vw;
    display: flex;
    padding: 6px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0 0 10px 10px;
    background: linear-gradient(to bottom, #00ccff 0%, #ccffff 100%);
  }
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

export const Cards = styled.div`
  display: grid;
  margin: 40px 20px;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  background: #fffafa33;
  margin-bottom: 16px;
  border-radius: 16px;
  padding: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 350px) {
    grid-template-columns: 1fr;
    margin: 40px 10px;
  }
`;
