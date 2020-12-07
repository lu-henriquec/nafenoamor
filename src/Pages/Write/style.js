import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Legend = styled.p`
  font-size: 2rem;
  margin-top: 5vh;
  max-width: 640px;
  text-align: center;

  span {
    text-decoration: underline;
    color: #FFFFFF;
  }
`;

export const Form = styled.form`
  height: 100%;
  width: 80vw;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Row = styled.div`
  display: grid;
  align-items: flex-end;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
`;

export const Error = styled.p`
  text-align: center;
  color: #DA4453;
  height: 30px;
`;