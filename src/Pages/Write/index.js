import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { setFormData } from '../../Store/FormData/actions';
import { LOVE_SUGGESTIONS, FAITH_SUGGESTIONS } from '../../Utils/constants';
import getRandom from '../../Utils/random';

import Wrapper from '../../Components/Wrapper';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import NextButton from '../../Components/NextButton';
import Input from '../../Components/Input';
import WriteOptions from '../../Components/WriteOptions';

import { Main, Legend, Form, Row, Error } from './style';

const INITAL_DATA = {
  palavra1: '',
  palavra2: '',
  palavra3: '',
  nome: '',
  funcao: '',
  email: ''
};

const schema = Yup.object().shape({
  email: Yup.string()
    .required('O campo "E-mail" é obrigatório')
    .email('Email inválido'),
  funcao: Yup.string()
    .required('O campo "O que faz" é obrigatório'),
  nome: Yup.string()
    .required('O campo "Nome" é obrigatório'),
  palavra3: Yup.string()
    .required('O campo "Fim" é obrigatório'),
  palavra2: Yup.string()
    .required('O campo "Meio" é obrigatório'),
  palavra1: Yup.string()
    .required('O campo "Começo" é obrigatório')
});


const LegendTriggerLove = ({ trigger }) => {
  return (
    <React.Fragment>
      Três palavras dirão por você. Para encontrar a sua mensagem de amor, vai <span onClick={trigger}>clicando aqui</span>
    </React.Fragment>
  )
}

const LegendTriggerFaith = ({ trigger }) => {
  return (
    <React.Fragment>
      Três palavras dirão por você. Para encontrar a sua mensagem de fé, vai <span onClick={trigger}>clicando aqui</span>
    </React.Fragment>
  )
}

function Write() {
  let history = useHistory();
  const dispatch = useDispatch();
  const { na_fe_no_amor } = useSelector(state => state.formDataReducer.formData);
  const [inLuck, setInLuck] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(INITAL_DATA);

  const handleValues = ({ name, value }) => {
		setData({...data, [name]: value});
	}

  const getBgColor = () => {
    let color = '';

    if (na_fe_no_amor === 'love') color = 'var(--color-secundary)';

    if (na_fe_no_amor === 'faith') color = 'var(--color-quarter)';

    return color;
  }

  const validForm = async () => {
    const verify = await schema.validate(data).then( val => val).catch( err => err);
		if (verify.errors) {
			setError(verify.message)
			return;
    }

    dispatch(setFormData({na_fe_no_amor, ...data}))
    history.push('/color')
  }

  const getLegend = () => {
    let text = 'Com respeito, sem preconceito, conte em três palavras o que você espera pra 2021.'

    if (na_fe_no_amor === 'love') text = 'Com respeito, sem preconceito, conte em três palavras o que é 2021 com amor.'

    return text
  }

  const LegendTrigger = na_fe_no_amor === 'love' ? LegendTriggerLove : LegendTriggerFaith;

  const triggerWords = () => {
    const words = na_fe_no_amor === 'love' ? LOVE_SUGGESTIONS : FAITH_SUGGESTIONS;
    const randomElements = getRandom(words, 3);

    setData({
      ...data,
      palavra1: randomElements[0],
      palavra2: randomElements[1],
      palavra3: randomElements[2]
    })
  }

  return (
    <Wrapper bgGradientTop={() => getBgColor()}>
      <Header>
        <WriteOptions
          changeOption={setInLuck}
          active={inLuck}
          firstLabel="Quero escrever"
          lastLabel="Quero na sorte"
        />
      </Header>
      
      <Main>
        <Legend>
          {!inLuck ? 
            getLegend()
            : <LegendTrigger trigger={triggerWords} />
          }
        </Legend>

        <Form>
          <Row>
            <Input
              label="Começo"
              name="palavra1"
              type="text"
              value={data.palavra1}
              onChange={(e) => handleValues(e.target)}
            />
            <Input
              label="Meio"
              name="palavra2"
              type="text"
              value={data.palavra2}
              onChange={(e) => handleValues(e.target)}
            />
            <Input
              label="Fim"
              name="palavra3"
              type="text"
              value={data.palavra3}
              onChange={(e) => handleValues(e.target)}
              />
          </Row>
          <Row>
            <Input
              label="Seu nome"
              color={getBgColor()}
              name="nome"
              type="text"
              value={data.nome}
              onChange={(e) => handleValues(e.target)}
            />
            <Input
              label="O que faz" 
              color={getBgColor()} 
              name="funcao" 
              type="text" 
              value={data.funcao}
              onChange={(e) => handleValues(e.target)}
            />
            <Input 
              label="E-mail" 
              color={getBgColor()} 
              name="email" 
              type="email" 
              value={data.email}
              onChange={(e) => handleValues(e.target)}
            />
          </Row>
        </Form>
        <Error>{error}</Error>
      </Main>

      <Footer className="hideLink">
        <NextButton 
          onClick={validForm}
          visible={true}
          label='Prossiga'
        />
      </Footer>
    </Wrapper>
  );
}

export default Write;