import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${ props => props.color };
`;

export const Title = styled.h1`
  margin-left: 6px;
  font-size: 125%;
  color: inherit;
`;