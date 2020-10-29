import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #9999ff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #fff;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #6600cc;
      border-color: #6600cc;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #6600cc;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #fff;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
