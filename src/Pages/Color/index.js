import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { setFormData } from '../../Store/FormData/actions';

import Wrapper from '../../Components/Wrapper';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import NextButton from '../../Components/NextButton';
import WriteOptions from '../../Components/WriteOptions';
import ColorsSelection from '../../Components/ColorsSelection';

import { Main, Legend, ContainerOptions } from './style';

function Write() {
  let history = useHistory();
  const dispatch = useDispatch();
  const { formData } = useSelector(state => state.formDataReducer);
  const [visibleSmooth, setVisibleSmooth] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const valid = async () => {
    if(!selectedColor) return;

    await dispatch(setFormData({ ...formData, color: selectedColor}))
    history.push('/Loading')
  }

  const selectColor = color => {
    setSelectedColor(color)
  }

  const getLegend = () => {
    let text = 'Escolha a forma que você quer colorir a sua fé'

    if (formData.type === 'love') text = 'Escolha a forma que você quer colorir sua mensagem de amor'

    return text
  }

  return (
    <Wrapper>
      <Header>
      </Header>
      
      <Main>
        <Legend>
          {getLegend()}
        </Legend>
        <ContainerOptions>
          <WriteOptions
            changeOption={setVisibleSmooth}
            active={visibleSmooth}
            firstLabel="Com intensidade"
            lastLabel="Com suavidade"
          />
        </ContainerOptions>
        <ColorsSelection
          smoothMode={visibleSmooth}
          type={formData.type}
          currentColor={selectedColor}
          onSelectCallback={selectColor}
        />
      </Main>

      <Footer className="hideLink">
        <NextButton 
          onClick={valid}
          visible={true}
          label='Prossiga'
        />
      </Footer>
    </Wrapper>
  );
}

export default Write;