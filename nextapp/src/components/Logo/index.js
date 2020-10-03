import React from 'react';
import * as SC from './styles';
import { RiMapPinFill } from 'react-icons/ri';
import { Colors } from '../../styles/constants';

const Logo = ({ color, size }) => {
  return (
    <SC.Logo color={ color || Colors.SUB_COLOR }>
      <RiMapPinFill color={ color || Colors.SUB_COLOR } size={ size || 32 } />
      <SC.Title>PointCEP</SC.Title>
    </SC.Logo>
  );
};

export default Logo;