import React, { useState, useEffect } from 'react';
import { MapRef } from 'react-map-gl';
import ControlBox from '../../UI/ControlBox';
import Header from '../../UI/Header';
import Map from '../../UI/Map';
import Nav from '../../UI/Nav';

export type ScreenType = 'home' | 'date' | 'compare';

function MainTemplate() {
  const [beforeMap, setBeforeMap] = useState<MapRef>();
  const [currentMap, setCurrentMap] = useState<MapRef>();
  const [screen, setScreen] = useState<ScreenType>('home');
  // const [markers, setMarkers] = useState([]);

  const changeScreen = (screen: ScreenType) => {
    setScreen(screen);
  };

  useEffect(() => {}, [currentMap]);

  useEffect(() => {}, [beforeMap]);

  return (
    <>
      <Header />
      <Nav screen={screen} changeScreen={changeScreen} />
      {screen === 'date' && <ControlBox />}
      <Map isCompare={screen === 'compare'} getBeforeMap={setBeforeMap} getCurrentMap={setCurrentMap} />
    </>
  );
}

export default MainTemplate;
