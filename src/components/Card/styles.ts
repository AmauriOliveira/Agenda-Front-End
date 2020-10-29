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
    background: ${shade(0.1, '#ffffcc')};
  }
  &.past {
    background: #ff6666;
    &:hover {
      background: ${shade(0.1, '#ff6666')};
    }
  }
  &.today {
    background: #ccffcc;
    &:hover {
      background: ${shade(0.1, '#ccffcc')};
    }
  }

  h5 {
    margin: 12px 0;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #6600cc;
  }

  p {
    font-size: 12px;
    line-height: 20px;
    color: #000;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: #6600cc;
    border-radius: 12px;
    font-size: 12px;
    color: #fff;
    text-decoration: none;
    margin: 4px;
    padding: 4px;

    svg {
      margin-left: 8px;
    }

    &:hover {
      background: ${shade(0.2, '#6600cc')};
    }
  }
`;
