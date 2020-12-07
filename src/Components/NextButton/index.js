import React from 'react';

import Arrow from '../../Assets/Images/arrow.svg';

import { Area } from './style';

function NextButton({ label, onClick, visible }) {
  return (
    <Area visible={visible}>
      <button onClick={onClick}>
        {label}
        <img src={Arrow} alt={label} />
      </button>
    </Area>
  );
}

export default NextButton;