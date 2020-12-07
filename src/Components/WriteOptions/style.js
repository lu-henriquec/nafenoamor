import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Option = styled.span`
  position: relative;
  font-size: 1.4rem;
  opacity: ${props => props.active ? '100%' : '20%'};
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: -25px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border: 1px solid #000;
    border-radius: 50%;
    background: ${props => props.active ? '#000' : 'transparent'};
  }
`;
