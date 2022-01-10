import React from 'react';
import Icon from '../Icon';
import * as Style from './styled';

function Nav() {
  return (
    <Style.Container>
      <Style.IconWrapper>
        <Icon icon="home" color="#000000" width="70%" />
      </Style.IconWrapper>
      <Style.IconWrapper>
        <Icon icon="clock" color="#000000" width="70%" />
      </Style.IconWrapper>
      <Style.IconWrapper>
        <Icon icon="compare" color="#000000" width="70%" />
      </Style.IconWrapper>
    </Style.Container>
  );
}

export default Nav;
