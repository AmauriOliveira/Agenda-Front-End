import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const CardsContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Cards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-bottom: 16px;
  border-radius: 16px;
  padding: 16px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    width: 70%;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const Aviso = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;
