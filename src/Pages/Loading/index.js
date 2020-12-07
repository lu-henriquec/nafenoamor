import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import { TriangleWhite } from '../../Assets/SVGComponents/triangle';
import { CircleWhite } from '../../Assets/SVGComponents/circle';

import { Main } from './style';

function Loading() {
  const { type } = useSelector(state => state.formDataReducer.formData);
  
  return (
    <Main bgColor={type === 'love' ? '#FF9090' : 'var(--color-tertiary)'}>
      <p>Aguarde alguns instantes</p>
      <div>
        {type === 'love' 
          ? <CircleWhite />
          : <TriangleWhite />
        }
      </div>
    </Main>
  );
}

export default Loading;