import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  position: absolute;
  left: 43.5%;
  top: 15%;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
