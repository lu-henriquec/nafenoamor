import React from 'react';

import Formas from '../../Assets/Images/formas.svg';

import { Container, Top, Middle, Bottom } from './style';

function Card({ data }) {
  if(data.type === 'love') {
    return (
      <Container id="card" bgColor={data.color}>
        <Top>Pedido em 2020 &#8594; 2021 & além</Top>
        <Middle>
          <span>Com amor</span>
          <p>{data.comeco}</p>
          <p>{data.meio}</p>
          <p>{data.fim}</p>
        </Middle>
        <Bottom>
          <p>{data.name}</p>
          <img src={Formas} alt='Formas geométricas' />
        </Bottom>
      </Container>
    )    
  }

  return (
    <Container id="card" className="faith--card" bgColor={data.color}>
      <Top>Pedido em vinte-vinte</Top>
      <Middle>
        <span>com fé</span>
        <p>{data.comeco}</p>
        <p>{data.meio}</p>
        <p>{data.fim}</p>
      </Middle>
      <Bottom>
        <img src={Formas} alt='Formas geométricas' />
        <p>para 2 mil & 21 &#8594; além</p>
      </Bottom>
    </Container>
  );
}

export default Card;