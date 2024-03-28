import styled from 'styled-components';

export const AutoListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom:  ${p => p.theme.spasing(12)};
`;

export const AutoListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spasing(8)};
  margin-bottom: ${p => p.theme.spasing(12)};
  padding-top: ${p => p.theme.spasing(5)};
`;

export const Btn = styled.button`
  border: 1px solid;
  border-color: rgba(16, 24, 40, 0.2);
  background-color: ${(p) => p.theme.colors.white};
  border-radius: 200px;
  padding: ${p => p.theme.spasing(4)} ${p => p.theme.spasing(10)};
  width: 166px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.main};
  transition: border-color 250ms ${(p) => p.theme.transition};

  &:hover {
    border-color: ${(p) => p.theme.colors.button};
  }
`;