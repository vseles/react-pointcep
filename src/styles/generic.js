import styled from 'styled-components/macro';
import { BREAKPOINTS } from './constants';

export const Shell = styled.div`
  max-width: ${ BREAKPOINTS.FULL_WIDTH };
  width: 100%;
  margin: 0 auto;
  padding: 0 12px;
`;