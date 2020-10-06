import styled, { css } from 'styled-components';
import { Colors } from '../../styles/constants';
import { Breakpoints } from '../../styles/constants';

export const Search = styled.div`
  padding: 50px 10px;
  flex: 0 1 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and ( min-width: ${ Breakpoints.DESKTOP_WIDTH } ) {
    padding: 50px;
  }

  @media screen and ( max-width: ${ Breakpoints.TABLET_WIDTH } ) {
    padding: 15px;
    flex: 0 1 100%;
  }
`;

export const Title = styled.h1`
  color: ${ Colors.SUB_COLOR };
  font-size: 200%;
  font-family: 'Metropolis Black';
  text-transform: lowercase;
`;

export const Text = styled.p`
  color: ${ Colors.GRAY_COLOR };
  margin: 12px 0 20px 0;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FilterSet = styled.div`
  display: flex;
  align-items: center;
  color: ${ Colors.LIGHTGRAY_COLOR };
  margin: 12px 0;
  font-size: 85%;
  cursor: pointer;
  & > p { margin-right: 8px; font-weight: 700; }

  ${ props => props.disabled && css`
    opacity: .79;
    cursor: not-allowed;
  `}
`;

export const FilterLabel = styled.label`
  cursor: inherit;
  display: flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 5px;
  border: 1px solid;
  background: #fff;
  text-transform: uppercase;
  font-weight: ${ props => props.active ? '700' : '400' };
  color: ${ props => props.active ? Colors.SUB_COLOR : Colors.LIGHTGRAY_COLOR };
  border-color: ${ props => props.active ? Colors.SUB_COLOR : Colors.LIGHTGRAY_COLOR };
  &:not( :last-of-type ) { margin-right: 12px; }
`;

export const FilterSpan = styled.span`
  display: flex;
  margin-left: 2px;
  margin-right: 4px;
  position: relative;
  & > span {
    width: 14px;
    height: 14px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 1px solid ${ Colors.LIGHTGRAY_COLOR };
  } & > input {
    display: none;
    &:checked + span {
      border-color: ${ Colors.SUB_COLOR };
      &:before {
        width: 8px;
        height: 8px;
        content: '';
        display: flex;
        background: ${ Colors.SUB_COLOR };
        border: none;
        border-radius: 50px;
      }
    }
  }
`;

export const Submit = styled.button`
  color: #fff;
  background: ${ Colors.SUB_COLOR };
  border-radius: 50px;
  border: none;
  outline: none;
  padding: 12px;
  max-width: 200px;
  margin-top: 12px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: lightgray;
  }

  @media screen and ( max-width: ${ Breakpoints.TABLET_WIDTH } ) {
    max-width: initial;
  }
`;