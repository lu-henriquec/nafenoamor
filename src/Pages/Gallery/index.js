import React, { useState, useEffect } from 'react';

import Wrapper from '../../Components/Wrapper';
import Header from '../../Components/Header';
import Card from '../../Components/Card';
import WriteOptions from '../../Components/WriteOptions';

import { Main } from './style';

const HACK_DATA= {
  type: 'love'
}

function Gallery() {
  const [visibleFaith, setVisibleFaith] = useState(false);

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
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
        <Card data={HACK_DATA} />
      </Main>
    </Wrapper>
  );
}

export default Gallery;