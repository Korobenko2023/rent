import styled from 'styled-components';

export const AutoListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const AutoListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
  padding-top: 100px;
`;

export const Btn = styled.button`
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
  color: ${(p) => p.theme.colors.black};
  transition: border-color 250ms ${(p) => p.theme.transition};

  &:hover {
    border-color: ${(p) => p.theme.colors.Tomato};
  }
`;