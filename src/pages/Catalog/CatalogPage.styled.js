import styled from 'styled-components';

// export const ContactsTitle = styled.h3`
// margin-top: ${p => p.theme.spasing(6)};
// text-align: center;
// font-style: italic;
// color: ${p => p.theme.colors.Indigo}; 
// `;

export const CatalogDiv = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  max-width: 1440px;
`;

export const AutosUl = styled.ul`
  margin-bottom: 50px;
`;

export const LoadMoreButton = styled.button`
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.iris};
  background-color: ${(p) => p.theme.colors.white};
  border-radius: 200px;
  padding: 16px 32px;
  width: 145px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.ocean};
  transition: border-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.Tomato};
  }
`;
