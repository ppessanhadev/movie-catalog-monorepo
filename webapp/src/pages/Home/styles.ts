import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  .movie-card {
    :first-child {
      margin-top: 72px;
    }
  }
`;
