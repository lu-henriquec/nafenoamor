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

  @media (max-width: 700px) {
    grid-template-columns: auto 1fr;
    &.hideLink {
      p {
        display: none
      }
    }

    &.hideGallery {
      grid-template-columns: 1fr;

      & > a { display: none; }
    }
  }
`;

export const Middle = styled.div`
  justify-self: center;
`;