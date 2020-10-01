import styled from 'styled-components/macro';
import { Colors } from '../../styles/constants';
import { Breakpoints } from '../../styles/constants';

export const Results = styled.div`
  flex: 0 1 60%;
  display: flex;
  flex-direction: column;

  @media screen and ( max-width: ${ Breakpoints.TABLET_WIDTH } ) {
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    flex: 0 1 100%;
    position: absolute;
    background: #fff;
    display: ${ props => props.active ? 'flex' : 'none' };
  }
`;

export const Shell = styled.div`
  flex: 1;
  margin: 12px 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 2px;
  border-left: 1px solid lightgray;
`;

export const Empty = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  margin: 12px 0;
  font-weight: 400;
  font-size: 125%;
  color: ${ Colors.GRAY_COLOR };
`;

export const Address = styled.div`
  position: relative;
  max-width: 560px;
  width: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    color: ${ Colors.SUB_COLOR };
    font-size: 200%;
    font-family: 'Metropolis Black';
  } p {
    margin: 2px 0;
    color: ${ Colors.GRAY_COLOR };
  }
`;

export const Close = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  position: absolute;
  top: -20px;
  right: -15px;
`;

export const Reset = styled.button`
  height: 40px;
  color: #fff;
  background:  ${ Colors.SUB_COLOR };
  border-radius: 50px;
  border: none;
  outline: none;
  padding: 12px;
  margin-top: 12px;
  max-width: 260px;
  cursor: pointer;

  @media screen and ( max-width: ${ Breakpoints.TABLET_WIDTH } ) {
    max-width: initial;
  }
`;

export const Maps = styled.div`
  width: 100%;
  height: 300px;
  margin: 12px 0;
`;

export const Pin = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -75%);
`;