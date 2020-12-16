import React from 'react';
import { useHistory } from "react-router-dom";

import Formas from '../../Assets/Images/formas.svg';

import { Container, Top, Middle, Bottom } from './style';

function Card({ data }) {
  let history = useHistory();

  const goToCard = () => {
    history.push(`/card/${data.id}`);
  }

  if(data.na_fe_no_amor === 'love') {
    return (
      <Container id="card" onClick={goToCard} bgColor={data.cor}>
        <Top>Pedido em 2020 &#8594; 2021 & além</Top>
        <Middle>
          <span>Com amor</span>
          <p>{data.palavra1}</p>
          <p>{data.palavra2}</p>
          <p>{data.palavra3}</p>
        </Middle>
        <Bottom>
          <p>{data.nome}</p>
          <img src={Formas} alt='Formas geométricas' />
        </Bottom>
      </Container>
    )    
  }

  return (
    <Container id="card" onClick={goToCard} className="faith--card" bgColor={data.cor}>
      <Top>Pedido em vinte-vinte</Top>
      <Middle>
        <span>com fé</span>
        <p>{data.palavra1}</p>
        <p>{data.palavra2}</p>
        <p>{data.palavra3}</p>
      </Middle>
      <Bottom>
        <img src={Formas} alt='Formas geométricas' />
        <p>para 2 mil & 21 &#8594; além</p>
      </Bottom>
    </Container>
  );
}

export default Card;