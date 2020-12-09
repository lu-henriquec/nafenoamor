import styled from 'styled-components';

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 280px));
  grid-template-rows: minmax(auto, 397px);
  grid-auto-rows: minmax(auto, 397px);
  gap: 20px;
  justify-content: center;

  
  width: 100%;
  margin: 30px auto 0;

  @media (min-width: 700px) {
    max-width: 1200px;
  }
`;
