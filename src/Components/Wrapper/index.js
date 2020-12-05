import React from 'react';

import { WrapperDiv } from './style';

function Wrapper({ children, bgGradient, bgColor }) {
  return (
    <WrapperDiv bgGradient={bgGradient} bgColor={bgColor}>
      {children}
    </WrapperDiv>
  );
}

export default Wrapper;