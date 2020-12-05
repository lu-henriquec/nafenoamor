import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonStyle = styled(Link)`
  color: #FFF;
  background: #000;
  color: #FFF;
  padding: .4rem 0;
  transition: background .2s;
  font-size: 2rem;
  text-decoration: none;
  padding: 1rem;

  &:hover {
    background: rgba(0, 0, 0, .6);
  }

  @media (min-width: 700px) {
    padding: 2rem;
  }
`
