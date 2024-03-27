import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import img from '../../image/camper-min.jpg';
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
  color: ${p => p.theme.colors.main};
  letter-spacing: 0.02em;
  line-height: 1.5;
  font-size: 16px;
  background-image:  url(${img});
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

input, textarea, select, button {
  font: inherit;
}

button {
    cursor: pointer;
    border: none;
}

.disable-scroll {
        overflow: hidden;
}

.container {
  width: 1440px;
  padding-left: 64px;    
  padding-right: 64px;    
  margin: 0 auto; 
}

`;

