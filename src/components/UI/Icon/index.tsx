import React from 'react';
import * as Icons from './svg';
import * as Style from './styled';

interface IconType {
  icon: keyof typeof Icons;
  width: string;
  color?: string;
}

function Icon({ icon, width, color = '#000' }: IconType) {
  const SVGIcons = Icons[icon];

  return (
    <Style.Container width={width}>
      <SVGIcons color={color} />
    </Style.Container>
  );
}

export default Icon;
