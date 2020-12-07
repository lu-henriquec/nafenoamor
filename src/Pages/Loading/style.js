import styled from 'styled-components';

export const Main = styled.div`
  background: ${({ bgColor }) => bgColor ? bgColor : 'transparent'}; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  p {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  svg {
    width: 15rem;
    height: 15rem;

    circle,
    path {
      stroke-width: 1;
    }

    rect {
      transform: translateY(100%);
      animation-duration: 3s;
      animation-timing-function: ease-in-out;
      animation-delay: 1s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: none;
      animation-play-state: running;
      animation-name: slideUp;
    }
  }

  @keyframes slideUp{
    0% { 
      transform: translateY(100%);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;
