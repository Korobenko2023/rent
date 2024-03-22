import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: ${p => p.theme.spasing(15)};
`;

export const NaviLink = styled(NavLink)` 
  font-size: 20px;
  font-weight: 700;
  gap: ${p => p.theme.spasing(5)};
  color: ${p => p.theme.colors.Indigo};
  font-style: italic;   
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.MediumBlue};  
    text-decoration: underline;
  }
`;





