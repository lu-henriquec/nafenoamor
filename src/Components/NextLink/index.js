import React from 'react';
import { Link } from 'react-router-dom';

import { Area } from './style';

import Arrow from '../../Assets/Images/arrow.svg';

function NextLink({ link, visible }) {
  return (
    <Area visible={visible}>
      <Link to={link}>
        Prossiga
        <img src={Arrow} alt='Prossiga' />
      </Link>
    </Area>
  );
}

export default NextLink;
