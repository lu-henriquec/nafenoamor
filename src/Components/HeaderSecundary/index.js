import React from 'react';
import { Link } from 'react-router-dom';

import { Content, Middle, First } from './style';

function HeaderSecundary({ children }) {
  return (
    <header>
      <Content>
        <First>
          <Link to="/">Voltar ao <span>início</span></Link>
        </First>
        <Middle>
          {children}
        </Middle>
      </Content>
    </header>
  );
}

export default HeaderSecundary;