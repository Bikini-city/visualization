import React from 'react';
import * as Icons from './svg';
import * as Style from './styled';

interface IconType {
  icon: keyof typeof Icons;
  width: string;
}

function Icon({ icon, width }: IconType) {
  const SVGIcons = Icons[icon];

  return (
    <Style.Container width={width}>
      <SVGIcons />
    </Style.Container>
  );
}

export default Icon;
