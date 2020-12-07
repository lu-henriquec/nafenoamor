import styled, { css } from 'styled-components';

export const WrapperDiv = styled.div`
  background: ${({ bgColor }) => bgColor ? bgColor : 'transparent'}; 
  display: grid;
  grid-template-rows: auto 1fr auto;

  height: 100%;
  padding: 4rem;

  transition: all .5s ease;

  ${({ bgGradient }) => bgGradient && css`
    background: linear-gradient(to right, transparent 0%, transparent 50%, #FFEDED 50%, #FFEDED 100%); /* W3C */
	`}

  ${({ bgGradientTop }) => bgGradientTop && css`
    background: ${`linear-gradient(to bottom, ${bgGradientTop} 0%, ${bgGradientTop} 50%, transparent 50%, transparent 100%)`}; 
	`}

`;