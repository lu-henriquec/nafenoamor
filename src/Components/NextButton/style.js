import styled from 'styled-components';

export const Area = styled.div`
  opacity: ${props => props.visible ? '1' : '0'};

  button {
    background: none;
    border: 0;
    text-decoration: none;
    display: flex;
    align-items: center;
    outline: none;
    cursor: pointer;

    img {
      margin-left: 15px;
    }
  }
`;
