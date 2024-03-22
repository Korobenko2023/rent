import styled from 'styled-components';

export const HomeTitle = styled.h1`
margin-top: ${p => p.theme.spasing(6)};
text-align: center;
text-transform: uppercase;
font-size: 50px;
font-style: italic;
color: ${p => p.theme.colors.Yellow};
text-shadow: 6px 4px 2px black; 
`;
