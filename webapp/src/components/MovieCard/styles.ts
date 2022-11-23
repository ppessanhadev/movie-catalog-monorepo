import styled from 'styled-components';

interface CardProps {
  url?: string;
}

export const Card = styled.section<CardProps>`
  display: flex;
  align-items: flex-end;

  background: ${(props) => `url(${props.url}) no-repeat 0 0`};
  background-size: cover;

  margin: 12px 0;
  width: 500px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
`;

export const Info = styled.article`
  width: 100%;
  height: 100%;
  padding: 24px 8px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  color: #ddd;

  h4,
  p {
    padding: 0 12px;
    font-weight: 300;
  }

  h2 {
    margin-top: 90px;
    padding: 4px 12px;
    font-size: 2.8rem;
    font-size: 400;
  }

  h4 {
    display: inline;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.1rem;
    padding: 12px;
  }
`;
