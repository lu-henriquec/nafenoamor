import styled from 'styled-components';

export const TitleStyle = styled.h1`
  font-size: 2.8rem;
  font-weight: 300;
  text-align: center;

  span { 
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;