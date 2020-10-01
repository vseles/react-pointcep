import styled from 'styled-components/macro';
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
    padding: 25px;
    flex: 0 1 100%;
  }
`;

export const Title = styled.h1`
  color: ${ Colors.SUB_COLOR };
  font-size: 220%;
  text-transform: lowercase;
  font-family: 'Metropolis Black';
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