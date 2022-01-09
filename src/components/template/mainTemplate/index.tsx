import React from 'react';
import ControlBox from '../../UI/ControlBox';
import Header from '../../UI/Header';
import Map from '../../UI/Map';
import Nav from '../../UI/Nav';

function MainTemplate() {
  return (
    <>
      <Header />
      <Nav />
      <ControlBox />
      <Map />
    </>
  );
}

export default MainTemplate;
