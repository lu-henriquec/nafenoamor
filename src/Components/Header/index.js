import React from 'react';

import { Content, Middle, Top } from './style';

import Social from '../Social';

function Header({ children }) {
  return (
    <header>
      <Content>
        <Top>
          <Social />
        </Top>
        <Middle>
          {children}
        </Middle>
      </Content>
    </header>
  );
}

export default Header;
