import React from 'react';
import * as SC from './styles';
import Logo from '../Logo';

const Header = ( ) => {
  return (
    <SC.Header>
      <SC.Shell>
        <Logo />
      </SC.Shell>
    </SC.Header>
  );
};

export default Header;