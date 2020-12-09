import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AreaSVG = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: fadeOutDisplay;

  @keyframes fadeOutDisplay{
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { width: 0; height: 0; opacity: 0; }
  }

  .top {
    transform: translateY(-30px) scale3d(3, 3, 3);
  }

  .bottom {
    transform: scale3d(3, 3, 3);
  }
`;

export const Text = styled.p`
  font-size: 3rem;
  font-family: "Cera PRO";
  margin-top: 50px;
`;

export const WrapperCard = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0;
  height: 0;

  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 2s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: fadeInDisplay;

  @keyframes fadeInDisplay{
    0% { opacity: 0; width: 0; height: 0; }
    1% { width: 100%; height: 100%; }
    100% { opacity: 1; width: 100%; height: 100%; }
  }
`;