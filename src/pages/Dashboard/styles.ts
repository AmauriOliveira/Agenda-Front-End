import styled from 'styled-components';
import { shade } from 'polished';

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
    width: 80vw;
    background: #4b0082;
    padding: 16px;
    border-radius: 0 0 10px 10px;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);

    a {
      width: 40px;
      height: 40px;
      background: #6600cc;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.2s;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);

      &:hover {
        background: ${shade(0.2, '#6600cc')};
      }
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
