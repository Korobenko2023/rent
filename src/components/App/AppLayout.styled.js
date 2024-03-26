import styled from 'styled-components';
export const AppLayoutContainer = styled.div`
  max-width: 1440px;
  margin-left: auto ;
  margin-right: auto;
  margin-bottom: ${p => p.theme.spasing(10)};
  padding: 0 ${p => p.theme.spasing(4)};   
`;

