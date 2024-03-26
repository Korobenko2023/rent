import styled from 'styled-components';

export const FavoritesDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${p => p.theme.spasing(4)};
  background: ${p => p.theme.colors.white}; 
`;

export const FavoritesTitle = styled.h2`
position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: ${p => p.theme.spasing(1)};
  text-align: center;
  text-transform: uppercase;
  font-size: 40px;
  font-style: italic;
  color: ${p => p.theme.colors.Yellow}; 
  text-shadow: 6px 4px 2px black; 
  z-index: 999;
`;