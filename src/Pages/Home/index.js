import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { setFormData } from '../../Store/FormData/actions';

import Wrapper from '../../Components/Wrapper';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Title from '../../Components/Title';

import Triangle from '../../Assets/Images/triangle.svg';
import Circle from '../../Assets/Images/circle.svg';

import { Main, Section } from './style';

function Home() {
  let history = useHistory();
  const dispatch = useDispatch();

  const setType = async type => {
    await dispatch(setFormData({ na_fe_no_amor: type }));
    history.push(`/${type}`);
  };

  return (
    <Wrapper bgGradient="#FFEDED">
      <Header>
        <Title />
      </Header>
      
      <Main>
        <Section onClick={() => setType('faith')}>
          Na fé
          <img src={Triangle} alt="na fé" />
        </Section>
        <Section onClick={() => setType('love')}>
          No amor
          <img src={Circle} alt="no amor" />
        </Section>
      </Main>

      <Footer />
    </Wrapper>
  );
}

export default Home;