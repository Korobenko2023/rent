import styled from 'styled-components';

export const FavoritesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${p => p.theme.spasing(12)};
  background: ${p => p.theme.colors.white}; 
`;

export const FavoritesUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spasing(8)};
  margin-bottom: ${p => p.theme.spasing(12)};
  padding-top: ${p => p.theme.spasing(5)}; 
`;

