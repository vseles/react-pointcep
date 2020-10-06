import * as SC from './styles';
import { RiMapPinFill } from 'react-icons/ri';
import { Colors } from '../../styles/constants';

const Logo = ({ color, size }) => {
  return (
    <SC.Href href="/" title="PointCEP">
      <SC.Logo color={ color || Colors.SUB_COLOR }>
        <RiMapPinFill color={ color || Colors.SUB_COLOR } size={ size || 32 } />
        <SC.Title>PointCEP</SC.Title>
      </SC.Logo>
    </SC.Href>
  );
};

export default Logo;