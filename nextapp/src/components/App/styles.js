import styled from 'styled-components';
import { Shell as _Shell } from '../../styles/generics';

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const View = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Shell = styled( _Shell )`
  flex: 1;
  display: flex;
  position: relative;
  justify-content: space-between;
`;