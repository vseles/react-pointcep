import styled from 'styled-components';
import { Colors } from '../../styles/constants';
import { Shell as _Shell } from '../../styles/generics';

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  background: ${ Colors.BASE_COLOR };
  border-bottom: 1px solid ${ Colors.SUB_COLOR };
`;

export const Shell = styled( _Shell )`
  display: flex;
  justify-content: space-between;
`;