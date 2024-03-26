import styled from 'styled-components';

export const CatalogDiv = styled.div`
  margin: 0 auto;
  padding: 0 ${p => p.theme.spasing(10)};
  width: 100%;
  background: ${p => p.theme.colors.white}; 
  max-width: 1440px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap:  ${p => p.theme.spasing(12)};
`;
