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
  comeco: '',
  meio: '',
  fim: '',
  name: '',
  whatDo: '',
  email: ''
};

const schema = Yup.object().shape({
  email: Yup.string()
    .required('O campo "E-mail" é obrigatório')
    .email('Email inválido'),
  whatDo: Yup.string()
    .required('O campo "O que faz" é obrigatório'),
  name: Yup.string()
    .required('O campo "Nome" é obrigatório'),
  fim: Yup.string()
    .required('O campo "Fim" é obrigatório'),
  meio: Yup.string()
    .required('O campo "Meio" é obrigatório'),
  comeco: Yup.string()
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
  const { type } = useSelector(state => state.formDataReducer.formData);
  const [inLuck, setInLuck] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(INITAL_DATA);

  const handleValues = ({ name, value }) => {
		setData({...data, [name]: value});
	}

  const getBgColor = () => {
    let color = '';

    if (type === 'love') color = 'var(--color-secundary)';

    if (type === 'faith') color = 'var(--color-quarter)';

    return color;
  }

  const validForm = async () => {
    const verify = await schema.validate(data).then( val => val).catch( err => err);
		if (verify.errors) {
			setError(verify.message)
			return;
    }

    dispatch(setFormData({type, ...data}))
    history.push('/color')
  }

  const getLegend = () => {
    let text = 'Com respeito, sem preconceito, conte em três palavras o que você espera pra 2021.'

    if (type === 'love') text = 'Com respeito, sem preconceito, conte em três palavras o que é 2021 com amor.'

    return text
  }

  const LegendTrigger = type === 'love' ? LegendTriggerLove : LegendTriggerFaith;

  const triggerWords = () => {
    const words = type === 'love' ? LOVE_SUGGESTIONS : FAITH_SUGGESTIONS;
    const randomElements = getRandom(words, 3);

    setData({
      ...data,
      comeco: randomElements[0],
      meio: randomElements[1],
      fim: randomElements[2]
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
              name="comeco"
              type="text"
              value={data.comeco}
              onChange={(e) => handleValues(e.target)}
            />
            <Input
              label="Meio"
              name="meio"
              type="text"
              value={data.meio}
              onChange={(e) => handleValues(e.target)}
            />
            <Input
              label="Fim"
              name="fim"
              type="text"
              value={data.fim}
              onChange={(e) => handleValues(e.target)}
              />
          </Row>
          <Row>
            <Input
              label="Seu nome"
              color={getBgColor()}
              name="name"
              type="text"
              value={data.name}
              onChange={(e) => handleValues(e.target)}
            />
            <Input
              label="O que faz" 
              color={getBgColor()} 
              name="whatDo" 
              type="text" 
              value={data.whatDo}
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