import React from 'react';

import { WrapperDiv } from './style';

function Wrapper({ children, bgGradient, bgColor, bgGradientTop }) {
  return (
    <WrapperDiv bgGradient={bgGradient} bgColor={bgColor} bgGradientTop={bgGradientTop && bgGradientTop()}>
      {children}
    </WrapperDiv>
  );
}

export default Wrapper;