import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column-reverse;
  height: 70px;
`;

export const InputStyled = styled.input`
  outline: none;
  border: 0;
  padding: 10px 0;
  border-bottom: 1px solid #000;
  background-color: transparent;
  width: 100%;
  font-size: 2rem;
  z-index: 10;
  position: relative;

  ::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }

  &:placeholder-shown + label {
    transform-origin: left bottom;
    transform: translate(0, 4rem);
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    transform: translate(0, 0);
    cursor: pointer;
    font-size: 1.2rem;
    color: ${props => props.color ? props.color : '#FFFFFF'};
    opacity: 1;
    transition: all 0.3s;
  }

  &:focus,
  &:not(:placeholder-shown) {
    border-bottom-color: ${props => props.color ? props.color : '#FFFFFF'};
  }
`;

export const Label = styled.label`
  width: 100%;
  color: #000;
  opacity: 20%;
  z-index: 1;
  transition: all 0.3s;
  font-size: 2rem;
  cursor: text;
`;