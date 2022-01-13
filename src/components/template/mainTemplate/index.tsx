import React, { useState } from 'react';
import ControlBox from '../../UI/ControlBox';
import Header from '../../UI/Header';
import Map from '../../UI/Map';
import Nav from '../../UI/Nav';

export type ScreenType = 'home' | 'date' | 'compare';

function MainTemplate() {
  const [screen, setScreen] = useState<ScreenType>('home');

  const changeScreen = (screen: ScreenType) => {
    setScreen(screen);
  };

  return (
    <>
      <Header />
      <Nav screen={screen} changeScreen={changeScreen} />
      {screen === 'date' && <ControlBox />}
      <Map isCompare={screen === 'compare'} />
    </>
  );
}

export default MainTemplate;
