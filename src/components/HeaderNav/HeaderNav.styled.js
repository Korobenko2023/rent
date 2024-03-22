import styled from 'styled-components';

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: ${p => p.theme.spasing(1)};
margin-bottom: ${p => p.theme.spasing(8)};
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;



