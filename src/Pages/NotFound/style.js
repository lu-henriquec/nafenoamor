import styled from 'styled-components';

export const Main = styled.main`
  padding: 2.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-weight: 500;
    font-size: 1.6rem;
    margin-top: 2rem;
  }

  a {
    text-decoration: none;
    border-bottom: 1px solid var(--color-primary); 
    margin-top: 1.8rem;
    font: 500 1.6rem "Courier New", Arial, sans-serif;
    cursor: pointer;
    outline: none;
    color: initial;
  }
`;