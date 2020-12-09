import { createGlobalStyle } from 'styled-components';

import { ForoLightWOFF, ForoLightWOFF2 } from '../Assets/fonts/foro-light'
import { ForoRegularWOFF, ForoRegularWOFF2 } from '../Assets/fonts/foro-regular'
import { ForoMediumWOFF, ForoMediumWOFF2 } from '../Assets/fonts/foro-medium'
import { ForoBoldWOFF, ForoBoldWOFF2 } from '../Assets/fonts/foro-bold'
import { CeraProBlackWOFF, CeraProBlackWOFF2 } from '../Assets/fonts/cerapro-black'

export default createGlobalStyle`
  :root {
    --color-primary: #FFA3A3;
    --color-secundary: #E04876;
    --color-tertiary: #FFB834;
    --color-quarter: #64C8E0;

    --color-love-01: #C8005F;
    --color-love-02: #FF4770;
    --color-love-03: #FF8DB2;
    --color-love-04: #FFB834;
    --color-love-05: #64C8E0;
    --color-love-06: #6DC9C9;

    --color-love-smooth-01: #FFB2B2;
    --color-love-smooth-02: #FFCFEA;
    --color-love-smooth-03: #FFD0B5;
    --color-love-smooth-04: #FFFACC;
    --color-love-smooth-05: #BFB9FF;
    --color-love-smooth-06: #A5D8D8;

    --color-faith-01: #64C8E0;
    --color-faith-02: #FFB834;
    --color-faith-03: #E1539F;
    --color-faith-04: #692240;
    --color-faith-05: #36B551;
    --color-faith-06: #F86363;

    --color-faith-smooth-01: #AFE9FF;
    --color-faith-smooth-02: #FEFFBE;
    --color-faith-smooth-03: #FFCFEA;
    --color-faith-smooth-04: #BFB9FC;
    --color-faith-smooth-05: #B5EBD7;
    --color-faith-smooth-06: #FFB7B2;

    --color-text-base: #000;

    font-size: 60%;
  }

  @font-face {
    font-family: 'Foro';
    src: local('Foro-Light'),
        url(${ForoLightWOFF2}) format('woff2'),
        url(${ForoLightWOFF}) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Foro';
    src: local('Foro-Bold'),
        url(${ForoBoldWOFF2}) format('woff2'),
        url(${ForoBoldWOFF}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Foro';
    src: local('Foro-Medium'),
        url(${ForoMediumWOFF2}) format('woff2'),
        url(${ForoMediumWOFF}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Foro';
    src: local('Foro-Regular'),
        url(${ForoRegularWOFF2}) format('woff2'),
        url(${ForoRegularWOFF}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Cera PRO';
    src: local('Cera PRO Black'), local('CeraPRO-Black'),
      url(${CeraProBlackWOFF2}) format('woff2'),
      url(${CeraProBlackWOFF}) format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background-color: #FFFFFF;
    font: 16px/1.5 "Foro", Arial, sans-serif;
  }

  body,
  input,
  button,
  textarea {
    color: var(--color-text-base);
    font-family: "Foro";
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  @keyframes fadeIn{
    0% { opacity: 0 }
    100% { opacity: 1 }
  }

  @keyframes fadeOut{
    0% { opacity: 1 }
    100% { opacity: 0 }
  }

  @keyframes slideUpZoom{
    0% { 
      transform: translateY(70px) scale3d(1, 1, 1);
    }
    100% {
      transform: translateY(-20px) scale3d(3, 3, 3);
    }
  }

  @keyframes slideDownZoom{
    0% { 
      transform: translateY(-70px) scale3d(1, 1, 1);
    }
    100% {
      transform: translateY(20px) scale3d(3, 3, 3);
    }
  }
`;
