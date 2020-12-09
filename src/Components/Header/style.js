import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  align-items: center;
  row-gap: 20px;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Middle = styled.div`
  justify-self: center;
  width: 100%;
`;

export const Top = styled.div`
  & > div {
    @media (max-width: 700px) {
      justify-content: center;
    }
  }
`;