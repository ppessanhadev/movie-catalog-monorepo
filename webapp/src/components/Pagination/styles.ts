import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 24px 0;
  display: flex;
  align-items: center;

  button:first-child {
    margin-right: 5px;
  }
  button:last-child {
    margin-left: 5px;
  }
`;

export const PaginationButton = styled.button<{ selected?: boolean }>`
  border: 1px solid #cecece;
  padding: 12px;
  font-size: 1.4rem;
  color: #252525;
  background-color: #eee;

  :disabled {
    opacity: 0.4;
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: #d8d8d8;
    `}
`;
