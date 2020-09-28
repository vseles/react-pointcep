import React from 'react';
import * as SC from './styles';
import { RiMapPinFill } from 'react-icons/ri'
import { COLORS } from '../../styles/constants';

const Logo = () => {
  return (
    <SC.Logo>
      <RiMapPinFill color={ COLORS.LIGHT_BLUE } size={ 32 } />
      <SC.Title>PointCEP</SC.Title>
    </SC.Logo>
  );
};

export default Logo;