import styled from 'styled-components/macro';
import { COLORS } from '../../styles/constants';

export const Container = styled.div`
  position: relative;
`;

export const Label = styled.label`
  color: ${ props => props.active ? COLORS.LIGHT_BLUE : COLORS.LIGHT_GRAY };
  font-weight: ${ props => props.active ? '700' : '400' };
  display: inline-block;
  position: absolute;
  pointer-events: none;
  cursor: text;
  left: 5px;
  top: ${ props => props.active ? '-10px' : '23px' };;
  transition: all 150ms ease-in;
`;

export const Field = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  margin: 12px 0;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: ${ COLORS.LIGHT_GRAY };
  border-bottom: 1px solid;
  &:disabled { cursor: not-allowed; }
`;