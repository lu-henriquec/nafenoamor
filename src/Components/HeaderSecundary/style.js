import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
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
`;