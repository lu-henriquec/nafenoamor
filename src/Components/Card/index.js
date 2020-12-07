import React from 'react';

import { Container, Top, Middle, Bottom } from './style';

function Card({ data }) {
  if(data.type === 'love') {
    return (
      <Container>

      </Container>
    )    
  }

  return (
    <Container>
      <Top>Pedido em vinte-vinte</Top>
      <Middle>
        <span>com fé</span>
        <p></p>
      </Middle>
      <Bottom>

      </Bottom>
    </Container>
  );
}

export default Card;