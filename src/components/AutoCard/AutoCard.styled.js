import styled from 'styled-components';

export const CardDiv = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spasing(6)};
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: ${(p) => p.theme.spasing(6)};
  width: 888px;
  height: 358px;
  margin-bottom: ${(p) => p.theme.spasing(8)};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AutoImg = styled.img`
  border-radius: ${(p) => (p.theme.radii.md)};
  width: 290px;
  height: 310px;
`;

export const AutoTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(p) => p.theme.spasing(2)};
`;

export const AutoTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  max-width: 340px;
`;

export const PriceDiv = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spasing(2)};
`;

export const ButtonFavorite = styled.button`
  background: none;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
`;

export const AutoSubtitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spasing(4)};
  margin-bottom: ${(p) => p.theme.spasing(6)};
`;

export const SubtitleDiv = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spasing(1)};
  align-items: baseline;
  justify-content: center;
`;

export const IconSvg = styled.svg`
  width: 24px;
  height: 24px;  
  stroke: ${(p) => p.theme.colors.main};
  fill: ${(p) => (p.theme.colors.transparent)};
  transition:
    fill 250ms ${(p) => p.theme.transition},
    stroke 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    fill: ${(p) => p.theme.colors.button};
    stroke: ${(p) => p.theme.colors.button};
  }
`;

export const IconStar = styled.svg`
    fill: ${(p) => p.theme.colors.rating};
    margin-right: ${(p) => p.theme.spasing(1)};
    width: 16px;
    height: 16px;
`;

export const IconMap = styled.svg`
    stroke: ${(p) => p.theme.colors.main};
    fill: ${(p) => (p.theme.colors.transparent)};
    margin-right: ${(p) => p.theme.spasing(1)};
    width: 16px;
    height: 16px;
`;

export const AutoSubtitleTextRev = styled.p`
  display: flex;
  gap: ${(p) => p.theme.spasing(1)};
  align-items: center;
  font-weight: 400;
  text-decoration: underline;
`;

export const AutoSubtitleText = styled.p`
  display: flex;
  gap: ${(p) => p.theme.spasing(1)};
  align-items: center;
  font-weight: 400;
`;

export const AutoDescription = styled.p`
  max-width: 525px;
  margin-bottom: ${(p) => p.theme.spasing(6)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.text};
`;

export const ShowMoreButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.button};
  border: none;
  border-radius: 200px;
  padding: ${p => p.theme.spasing(4)} ${p => p.theme.spasing(10)};
  width: 166px;
  height: 56px;
  transition: background-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.darkRed};
  }
`;

export const Description = styled.p`
  color: ${(p) => p.theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  max-width: 525px;
  margin-bottom: ${(p) => p.theme.spasing(6)};
`;


