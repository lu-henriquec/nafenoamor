import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import { saveCard } from '../../Services/apiService';

import { TriangleWhite } from '../../Assets/SVGComponents/triangle';
import { CircleWhite } from '../../Assets/SVGComponents/circle';

import { Main } from './style';

function Loading() {
  let history = useHistory();
  const { formData } = useSelector(state => state.formDataReducer);

  const save = async () => {
    const send = await saveCard(formData);
    if (send.status === 200) {
      history.push('/poster')
    } else {
      history.push('/')
    }
    
  }

  useEffect(() => {
    save()
  }, [])
  
  return (
    <Main bgColor={formData.na_fe_no_amor === 'love' ? '#FF9090' : 'var(--color-tertiary)'}>
      <p>Aguarde alguns instantes</p>
      <div>
        {formData.na_fe_no_amor === 'love' 
          ? <CircleWhite />
          : <TriangleWhite />
        }
      </div>
    </Main>
  );
}

export default Loading;