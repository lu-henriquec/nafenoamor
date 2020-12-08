import styled from 'styled-components';

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, auto));
  grid-template-rows: minmax(397px, auto);
  grid-auto-rows: minmax(397px, auto);
  gap: 20px;

  max-width: 1200px;
  margin: 30px auto 0;
`;
