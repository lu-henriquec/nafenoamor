import styled from 'styled-components';

export const Content = styled.footer`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  p {
    font-size: 1.4rem;
  }

  a {
    color: var(--color-text-base);
    font-size: 1.4rem;
    text-decoration: underline;
    justify-self: end;
  }
`;

export const Middle = styled.div`
  justify-self: center;
`;