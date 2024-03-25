import styled from 'styled-components';

export const CatalogDiv = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  background: ${p => p.theme.colors.greyWhite}; 
  max-width: 1440px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;
