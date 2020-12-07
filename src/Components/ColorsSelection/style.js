import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 20px;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 3rem 0;
`;

export const ItemColor = styled.div`
  background-color: ${props => props.color};
  height: 100%;
  widows: 100%;
  cursor: pointer;
  transition: all .3s;
  position: relative;

  &:before {
    content: 'OK';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    color: #FFFFFF;
    font-size: 2rem;
    opacity: 0;
    transition: all .3s;
  }

  ${({ active }) => active && css`
    transform: scale(.9);
    &:before {
      opacity: 1;
    }
	`}
`;
