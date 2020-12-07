import React, { useEffect, useState } from 'react';

import Wrapper from '../../Components/Wrapper';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Title from '../../Components/Title';
import NextLink from '../../Components/NextLink';

import { CircleLightPink, CirclePink } from '../../Assets/SVGComponents/circle';

import { Main, AreaAnim, TextDisappear, TextAppearTop, TextAppearBottom } from './style';

const Animation = ({ trigger }) => {
  useEffect(() => {
    setTimeout(() => {
      trigger("#FF9090");
      document.querySelectorAll('.svg').forEach(el => el.classList.add('white-stroke'))
    }, 5000);
  }, [trigger]);

  return (
    <AreaAnim>
      <TextAppearTop>
        Vão te olhar de lado. Vão fechar a porta.
        Vão dizer que ela saiu
      </TextAppearTop>

      <CircleLightPink className="top svg" />
      <TextDisappear>No amor</TextDisappear>
      <CirclePink className="bottom svg"/>

      <TextAppearBottom>
        Pois há uma flauta livre na tua mão.
        Toca teu amor pra ela ouvir
      </TextAppearBottom>
    </AreaAnim>
  );
};

function Love() {
  const [bg, setBg] = useState("");
  const [buttonvisible, setButtonVisible] = useState(false);

  const finishAnimation = color => {
    setBg(color);
    setButtonVisible(true);
  }

  return (
    <Wrapper bgColor={bg}>
      <Header>
        <Title />
      </Header>
      
      <Main>
        <Animation trigger={finishAnimation}/>
      </Main>

      <Footer>
        <NextLink link="/write" visible={buttonvisible} />
      </Footer>
    </Wrapper>
  );
}

export default Love;