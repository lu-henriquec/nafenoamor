import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import Wrapper from '../../Components/Wrapper';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Title from '../../Components/Title';
import NextLink from '../../Components/NextLink';

import { TriangleYellow, TriangleBlue } from '../../Assets/SVGComponents/triangle';

import { Main, AreaAnim, TextDisappear, TextAppearTop, TextAppearBottom } from './style';

const Animation = ({ trigger }) => {
  useEffect(() => {
    setTimeout(() => {
      trigger("var(--color-tertiary)");
      document.querySelectorAll('.svg').forEach(el => el.classList.add('white-stroke'))
    }, 5000);
  }, [trigger]);

  return (
    <AreaAnim>
      <TextAppearTop>
        Fé na existência terrena, nas pessoas e nas boas ações.
        Fazer para transformar o mundo que desejamos.
      </TextAppearTop>

      <TriangleBlue className="top svg" />
      <TextDisappear>Na fé</TextDisappear>
      <TriangleYellow className="bottom svg"/>

      <TextAppearBottom>
        Fé no espírito elevado, no céu, no terceiro olho, 
        na energia que move a vida e a nós mesmos.
      </TextAppearBottom>
    </AreaAnim>
  );
};

function Faith() {
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

export default Faith;