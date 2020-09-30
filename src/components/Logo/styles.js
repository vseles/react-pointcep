import styled from 'styled-components/macro';
import { COLORS }  from '../../styles/constants';

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin-left: 6px;
  font-size: 125%;
  color: ${ COLORS.LIGHT_BLUE };
`;