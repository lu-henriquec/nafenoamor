import React from 'react';

import { Container, InputStyled, Label } from './style';

function Input({ label, color, ...props }) {
  return (
    <Container>
      <InputStyled placeholder={label} color={color} {...props} />
      <Label color={color}>
        {label}
      </Label>
    </Container>
  );
}

export default Input;