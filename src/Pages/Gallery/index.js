import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import Wrapper from '../../Components/Wrapper';
import Header from '../../Components/Header';
import Card from '../../Components/Card';
import WriteOptions from '../../Components/WriteOptions';

import { Main } from './style';
import { getCards } from '../../Services/apiService';
import { setCard } from '../../Store/Card/actions';

function Gallery() {
  const { cards } = useSelector(state => state.cardReducer);
  const dispatch = useDispatch();
  const [visibleFaith, setVisibleFaith] = useState(false);

  const getCardsService = useCallback(async () => {
    const cardsList = await getCards();

    if(cardsList) {
      dispatch(setCard(cardsList.data))
    }
  }, [dispatch]);

  useEffect(() => {
    if(!cards.length) {
      getCardsService();
    }
  }, [cards, getCardsService]);

  return (
    <Wrapper>
      <Header>
        <WriteOptions
          changeOption={setVisibleFaith}
          active={visibleFaith}
          firstLabel="Na fé"
          lastLabel="No amor"
        />
      </Header>
      
      <Main>
        {cards.map( (item, idx) => (
          <React.Fragment key={idx}>
            {!visibleFaith && item.na_fe_no_amor === 'faith' && <Card data={item} />  }
            {visibleFaith && item.na_fe_no_amor === 'love' && <Card data={item} /> }
          </React.Fragment>
        ))}
      </Main>
    </Wrapper>
  );
}

export default Gallery;