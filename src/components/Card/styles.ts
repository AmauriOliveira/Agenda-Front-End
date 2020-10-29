import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  border: 1px outset #32215322;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  background: #ffffcc;
  padding: 8px;
  max-width: 100%;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#ffffcc')};
  }
  h1 {
    margin-top: 16px;
    font-size: 36px;
    line-height: 42px;
    color: #322153;
  }

  h3 {
    margin: 12px 0;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    color: #6600cc;
  }
  hr {
    margin: 4px 0;
    color: #000;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    color: #000;
  }
  svg {
    position: relative;
    left: 90%;
  }
`;
