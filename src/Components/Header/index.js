import React from 'react';

import { Content, Middle } from './style';

import Social from '../Social';

function Header({ children }) {
  return (
    <header>
      <Content>
        <Social />
        <Middle>
          {children}
        </Middle>
      </Content>
    </header>
  );
}

export default Header;
