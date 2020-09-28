import styled from 'styled-components';
import { COLORS } from '../../styles/constants';

export const Search = styled.div`
  padding: 50px;
  flex: 0 1 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 150ms ease-in;
`;

export const Title = styled.h1`
  color: ${ COLORS.LIGHT_BLUE };
  font-size: 225%;
  text-transform: lowercase;
  font-family: 'Metropolis Black';
`;

export const Text = styled.p`
  color: ${ COLORS.LIGHT_GRAY };
  margin: 12px 0 20px 0;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${ COLORS.LIGHT_BLUE };
  display: inline-block;
  position: absolute;
  pointer-events: none;
  cursor: text;
  left: 5px;
  top: -10px;
  transition: all 150ms ease-in;
`;

export const Field = styled.input`
  height: 40px;
  padding: 5px;
  margin: 12px 0;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid ${ COLORS.DARK_MAIN };
  &:disabled {
    cursor: not-allowed;
  }
`;

export const Submit = styled.button`
  height: 40px;
  color: #fff;
  background: ${ COLORS.LIGHT_BLUE };
  border-radius: 50px;
  border: none;
  outline: none;
  padding: 12px;
  max-width: 200px;
  margin-top: 12px;
  &:disabled {
    cursor: not-allowed;
    background-color: ${ COLORS.LIGHT_GRAY };
  }
`;