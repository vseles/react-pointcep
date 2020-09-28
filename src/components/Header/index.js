import React from 'react';
import * as SC from './styles';
import Logo from '../Logo';
import { Shell } from '../../styles/generic';

const Header = ( ) => {
  return (
    <SC.Header>
      <Shell>
        <Logo />
      </Shell>
    </SC.Header>
  );
};

export default Header;