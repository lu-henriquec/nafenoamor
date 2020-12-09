import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;

  display: flex;
  justify-content: space-around;
`;

export const Section = styled.div`
  display: grid;
  justify-items: center;
  align-self: center;

  font-size: 4rem;
  font-family: 'Cera PRO';
  text-transform: uppercase;
  cursor: pointer;

  img {
    margin-top: 20px;
  }

    @media (max-width: 700px) {
      font-size: 2rem;
    }
`;