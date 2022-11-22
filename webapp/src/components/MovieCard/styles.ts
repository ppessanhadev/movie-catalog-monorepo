import styled from 'styled-components';

export const Card = styled.section`
  display: flex;
  align-items: flex-end;
  background: url('https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg')
    no-repeat center 0;
  background-size: cover;
  width: 500px;
  height: 300px;
  border-radius: 12px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
`;

export const Info = styled.article`
  width: 100%;
  height: 80%;
  padding: 24px 8px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));

  h2 {
    margin: 40px 0 0 12px;
    font-size: 2.4rem;
    font-size: 400;
    color: #ddd;
  }
`;
