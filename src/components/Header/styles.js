import styled from 'styled-components';
import { COLORS } from '../../styles/constants';
import { Shell as _Shell } from '../../styles/generic';

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  background: ${ COLORS.DARK_MAIN };
`;

export const Shell = styled( _Shell )`
  display: flex;
  justify-content: space-between;
`;