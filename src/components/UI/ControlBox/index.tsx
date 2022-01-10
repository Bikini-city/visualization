import React from 'react';
import * as Style from './styled';

function ControlBox() {
  const dummyTrees = [
    { color: 'red', name: 'maple' },
    { color: 'blue', name: 'ash' },
  ];

  return (
    <Style.Container>
      <Style.Title>CONTROL</Style.Title>
      <Style.SubTitle>Date</Style.SubTitle>
      <Style.DateWrapper>
        <Style.InputBox checked id="checkbox" type="checkbox" />
        <Style.InputLabel htmlFor="checkbox">all</Style.InputLabel>
      </Style.DateWrapper>
      <Style.DateWrapper>
        <Style.InputText type="date" />
        ~
        <Style.InputText type="date" />
      </Style.DateWrapper>
      <Style.SubTitle>Species</Style.SubTitle>
      <Style.SpeciesWrapper>
        <Style.SpeciesSelect>
          {dummyTrees.map((item) => (
            <Style.SpeciesOption key={item.name} value={item.name}>
              {item.name}
            </Style.SpeciesOption>
          ))}
          <Style.SpeciesOption />
        </Style.SpeciesSelect>
        <Style.SpeciesList>
          {dummyTrees.map((item) => (
            <Style.Species key={item.name}>
              <Style.SpeciesCircle color={item.color} />
              <Style.SpeciesTitle>{item.name}</Style.SpeciesTitle>
            </Style.Species>
          ))}
        </Style.SpeciesList>
      </Style.SpeciesWrapper>
      <Style.SubTitle>Result</Style.SubTitle>
      <Style.ResultWrapper />
    </Style.Container>
  );
}

export default ControlBox;
