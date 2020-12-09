import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  align-items: center;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Middle = styled.div`
  justify-self: center;
`;

export const First = styled.div`
  a {
    color: #000000;
    text-decoration: none;
  }
  span {
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    text-align: center;
  }
`;