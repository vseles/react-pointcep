import styled from 'styled-components';

export const Href = styled.a`
  text-decoration: none;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${ props => props.color };
`;

export const Title = styled.em`
  margin-left: 6px;
  font-size: 150%;
  color: inherit;
  opacity: 0.89;
  font-style: normal;
  font-weight: 700;
  font-family: 'Metropolis Black';
`;