import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  & > div {
    justify-self: center;
  }

  @media (min-width: 700px) {
    padding: 4rem;
  }
`;

export const Main = styled.main`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;