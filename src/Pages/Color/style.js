import styled from 'styled-components';

export const ContainerOptions = styled.div`
  width: 35vw;
  min-width: 350px;
  margin-top: 20px;

  @media (min-width: 700px) {
    margin-top: 70px;
  }
`;

export const Main = styled.main`
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Legend = styled.p`
  font-size: 2rem;
  font-weight: 300;
  max-width: 340px;
  text-align: center;
`;
