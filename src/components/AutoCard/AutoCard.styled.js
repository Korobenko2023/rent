import styled from 'styled-components';

export const CardDiv = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  border: 1px solid ${(p) => p.theme.colors.grey};
  border-radius: 20px;
  padding: 24px;
  width: 890px;
  height: 360px;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AutoImg = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
`;

export const AutoTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const AutoTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.grey};
  max-width: 340px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const PriceDiv = styled.div`
  display: flex;
  gap: 10px;
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
  cursor: pointer;
`;

export const AutoSubtitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const SubtitleDiv = styled.div`
  display: flex;
  gap: 4px;
  align-items: baseline;
  justify-content: center;
`;

export const IconSvg = styled.svg.attrs(props => ({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  isFavorite: props.isFavorite, 
}))`
  width: 24px;
  height: 24px;  
  stroke: ${(props) => (props.isFavorite ? props.theme.colors.red : props.theme.colors.grey)};
  fill: ${(props) => (props.isFavorite ? props.theme.colors.red : props.theme.colors.transparent)};
  transition:
    fill 250ms ${(p) => p.theme.transition},
    stroke 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    fill: ${(p) => p.theme.colors.red};
    stroke: ${(p) => p.theme.colors.red};
  }
`;

export const IconStar = styled.svg`
    fill: ${(p) => p.theme.colors.Yellow};
    width: 16px;
    height: 16px;
`;

export const IconMap = styled.svg`
    stroke: ${(p) => p.theme.colors.greyWhite};
    width: 16px;
    height: 16px;
`;

export const AutoSubtitleText = styled.p`
  display: inline-block;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.grey};
`;

export const AutoDescription = styled.p`
  max-width: 525px;
  margin-bottom: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.grey};
`;

export const ShowMoreButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.whiteColor};
  background-color: ${(p) => p.theme.colors.redColor};
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  transition: background-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hoverButtonColor};
  }
`;

export const Description = styled.p`
  color: ${(p) => p.theme.colors.grey};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  max-width: 525px;
  margin-bottom: 24px;
`;


