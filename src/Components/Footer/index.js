import React from 'react';
import { Link } from 'react-router-dom';

import { Content, Middle } from './style';

function Footer({ children }) {
  return (
    <Content>
      <p>ir para <a href="https://audaz.com.br/" target="_blank" rel="noopener noreferrer">Audaz</a></p>
      <Middle>
        {children}
      </Middle>
      <Link to="/gallery">Galeria de desejos</Link>
    </Content>
  );
}

export default Footer;