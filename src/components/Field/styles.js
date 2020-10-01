import styled from 'styled-components/macro';
import { Colors } from '../../styles/constants';

export const Container = styled.div`
  position: relative;
`;

export const Label = styled.label`
  color: ${ props => props.active ? Colors.SUB_COLOR : Colors.GRAY_COLOR };
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
  border-bottom: ${ props => props.active ? '2px solid' : '1px solid' };
  border-color: ${ props => props.active ? Colors.SUB_COLOR : Colors.GRAY_COLOR };
  &.disabled {
    cursor: not-allowed;
    background: rgba(0,0,0, .0333);
  }
`;