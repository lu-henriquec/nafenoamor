import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Legend = styled.p`
  font-size: 2rem;
  font-weight: 300;
  margin-top: 5vh;
  max-width: 640px;
  text-align: center;

  span {
    text-decoration: underline;
    color: #FFFFFF;

    @media (max-width: 700px) {
      color: #000000;
    }
  }

  @media (max-width: 700px) {
    font-size: 1.6rem;
  }
`;

export const Form = styled.form`
  height: 100%;
  width: 80vw;

  @media (max-width: 700px) {
    width: 100%;
    margin: 30px 0;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Row = styled.div`
  display: grid;
  align-items: flex-end;
  column-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  row-gap: 20px;
`;

export const Error = styled.p`
  text-align: center;
  color: #DA4453;
  height: 30px;
`;