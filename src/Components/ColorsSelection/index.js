import React from 'react';

import { LOVE_COLOR, LOVE_COLOR_SMOOTH, FAITH_COLOR, FAITH_COLOR_SMOOTH } from '../../Utils/constants';

import { Container, ItemColor } from './style';

function ColorsSelection({ smoothMode, type, currentColor, onSelectCallback}) {
  const getColorGroup = () => {
    if (smoothMode) {
      if (type === 'love') return LOVE_COLOR_SMOOTH
      return FAITH_COLOR_SMOOTH
    }

    if (type === 'love') return LOVE_COLOR

    return FAITH_COLOR
  }

  return (
    <Container>
      {getColorGroup().map(item => (
        <ItemColor
          key={item}
          active={item === currentColor}
          color={`var(${item})`}
          onClick={() => onSelectCallback(item)}
        />
      ))}
    </Container>
  );
}

export default ColorsSelection;