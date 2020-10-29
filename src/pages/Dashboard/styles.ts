import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex: 1;
`;

export const Main = styled.main`
  width: 100vw;
`;

export const Cards = styled.div`
  display: grid;
  margin: 40px 20px;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;

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
