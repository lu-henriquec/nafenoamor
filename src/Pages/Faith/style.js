import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AreaAnim = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  .svg.white-stroke path {
    stroke: #FFFFFF;
    transition: stroke .3s ease;
  }

  .top {
    transform: translateY(-70px);
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
    animation-name: slideDownZoom;
  }

  .bottom {
    transform: translateY(70px);
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
    animation-name: slideUpZoom;
  }
`;

export const TextDisappear = styled.p`
  font-size: 4rem;
  font-family: 'Cera PRO';
  text-transform: uppercase;

  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: fadeOut;
`;

export const TextAppearTop = styled.p`
  font-size: 2rem;
  font-weight: 300;
  opacity: 0;
  transform: translateY(-70px);
  text-align: center;

  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 3s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: fadeIn;

  @media (min-width: 700px) {
    max-width: 50vw;
  }
`;

export const TextAppearBottom = styled.p`
  font-size: 2rem;
  font-weight: 300;
  opacity: 0;
  transform: translateY(70px);
  text-align: center;

  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 4s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: fadeIn;

  @media (min-width: 700px) {
    max-width: 50vw;
  }
`;