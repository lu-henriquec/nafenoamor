import React from 'react';
import { Link } from 'react-router-dom';

import { Main } from './style';

function NotFound() {
  return (
    <Main>
        <p>Ops... Não encontramos o que você procurou.</p>
        <Link to="/">Ir para Home</Link>
    </Main>
  );
}

export default NotFound;