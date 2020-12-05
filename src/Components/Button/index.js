import React from 'react';

import { ButtonStyle } from './style';

function Button({ label, link }) {
  return (
    <ButtonStyle to={link}>
      {label}
    </ButtonStyle>
  );
}

export default Button;