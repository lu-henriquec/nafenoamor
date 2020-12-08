import React from 'react'
import { useSelector } from 'react-redux';

import Wrapper from '../../Components/Wrapper';
import HeaderSecundary from '../../Components/HeaderSecundary';
import Footer from '../../Components/Footer';
import Social from '../../Components/Social';
import Card from '../../Components/Card';
import Downloads from '../../Components/Downloads';

import { TriangleYellow, TriangleBlue } from '../../Assets/SVGComponents/triangle';
import { CircleLightPink, CirclePink } from '../../Assets/SVGComponents/circle';

import { Main, AreaSVG, Text } from './style';

const Intro = ({ type }) => {
  if(type === 'love') {
    return (
      <AreaSVG>
        <CircleLightPink className="top" />
        <CirclePink className="bottom"/>
        <Text>MUITO AMOR PARA VOCÊ</Text>
      </AreaSVG>
    )
  }

  return (
    <AreaSVG>
      <TriangleBlue className="top" />
      <TriangleYellow className="bottom"/>
      <Text>BOTAMOS FÉ EM VOCÊ!</Text>
    </AreaSVG>
  );
}

function Poster() {
  const { formData } = useSelector(state => state.formDataReducer);

  return (
    <Wrapper>
      <HeaderSecundary>
        <Social />
      </HeaderSecundary>
      
      <Main>
        <Card data={formData} />       
      </Main>

      <Footer>
        <Downloads />
      </Footer>
    </Wrapper>
  );
}

export default Poster;