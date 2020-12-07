import React from 'react';

import { Container, Option } from './style';

function WriteOptions({ changeOption, active, firstLabel, lastLabel }) {
  return (
    <Container>
      <Option onClick={() => changeOption(false)} active={!active}>{firstLabel}</Option>
      <Option onClick={() => changeOption(true)} active={active}>{lastLabel}</Option>
    </Container>
  );
}

export default WriteOptions;