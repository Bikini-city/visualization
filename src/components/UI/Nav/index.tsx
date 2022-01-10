import React from 'react';
import Icon from '../Icon';
import * as Style from './styled';

function Nav() {
  return (
    <Style.Container>
      <Style.IconWrapper>
        <Icon icon="home" color="#ccc" width="70%" />
      </Style.IconWrapper>
      <Style.IconWrapper>
        <Icon icon="clock" color="#ccc" width="70%" />
      </Style.IconWrapper>
      <Style.IconWrapper>
        <Icon icon="compare" color="#ccc" width="70%" />
      </Style.IconWrapper>
    </Style.Container>
  );
}

export default Nav;
