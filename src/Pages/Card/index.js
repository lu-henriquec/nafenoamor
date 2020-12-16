import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import Social from '../../Components/Social';
import Downloads from '../../Components/Downloads';
import Card from '../../Components/Card';

import { Wrapper, Main } from './style';

function PageCard() {
  const history = useHistory();
  const [card, setCard] = useState(null);
  const { cards } = useSelector(state => state.cardReducer);
  let { id } = useParams();

  useEffect(() => {
    if(!card) {
      const currentCard = cards.find(item => item.id === id);

      setCard(currentCard);
      if(!currentCard) history.push('/gallery');
    }
  }, [card, cards, history, id])

  return (
    <Wrapper>
      <Social />
      <Main>
        {card && <Card data={card} />}
      </Main>
      <Downloads />
    </Wrapper>
  );
}

export default PageCard;