import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

body {
  font-family:  'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  padding: ${p => p.theme.spasing(4)};
  color: ${p => p.theme.colors.black};
  letter-spacing: 0.02em;
  line-height: 1.3;
  font-size: 16px;
  background: url('/src/public/image/camper.png');
  background-position: top;
  background-size: cover; 
  
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;  
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

a {
   text-decoration: none; 
}
`;

