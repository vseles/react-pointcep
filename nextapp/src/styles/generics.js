import styled from 'styled-components';
import { Breakpoints } from './constants';

export const Shell = styled.div`
  max-width: ${ Breakpoints.FULL_WIDTH };
  width: 100%;
  margin: 0 auto;
  padding: 0 12px;
`;