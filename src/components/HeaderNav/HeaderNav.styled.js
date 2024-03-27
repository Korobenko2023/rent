import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 270px;
padding: ${p => p.theme.spasing(1)};
margin-bottom: ${p => p.theme.spasing(8)};
background: ${p => p.theme.colors.inputs};
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const Navigation = styled.nav`
  display: flex;
  gap: ${p => p.theme.spasing(5)};
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







