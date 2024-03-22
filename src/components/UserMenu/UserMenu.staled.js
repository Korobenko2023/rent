import styled from 'styled-components';
export const UserMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserMenuP = styled.p`
color: ${p => p.theme.colors.Indigo};
font-size: 18px;
`;

export const UserMenuButton = styled.button`
  width: 150px;
  padding:  ${p => p.theme.spasing(2)}  ${p => p.theme.spasing(2)}; 
  background-color: ${p => p.theme.colors.white};   
  border-radius: ${p => p.theme.radii.lg}; 
  border: 1px solid ${p => p.theme.colors.Indigo};    
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1); 
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.blue}; 
    color: ${p => p.theme.colors.white};
  } 
  margin-top: ${p => p.theme.spasing(2)};
  margin-right: auto;
  margin-left: auto;   
`;
