import React from 'react';
import { ScreenType } from '../../template/mainTemplate';
import Icon from '../Icon';
import * as Style from './styled';

interface NavProps {
  screen: ScreenType;
  changeScreen: (screen: ScreenType) => void;
}

function Nav({ screen, changeScreen }: NavProps) {
  return (
    <Style.Container>
      <Style.IconWrapper onClick={() => changeScreen('home')}>
        <Icon icon="home" color={screen === 'home' ? '#9e7715' : '#ccc'} width="70%" />
      </Style.IconWrapper>
      <Style.IconWrapper onClick={() => changeScreen('date')}>
        <Icon icon="clock" color={screen === 'date' ? '#9e7715' : '#ccc'} width="70%" />
      </Style.IconWrapper>
      <Style.IconWrapper onClick={() => changeScreen('compare')}>
        <Icon icon="compare" color={screen === 'compare' ? '#9e7715' : '#ccc'} width="70%" />
      </Style.IconWrapper>
    </Style.Container>
  );
}

export default Nav;
