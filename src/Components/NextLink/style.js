import styled from 'styled-components';

export const Area = styled.div`
  opacity: ${props => props.visible ? '1' : '0'};

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: 500;

    img {
      margin-left: 15px;
    }
  }
`;