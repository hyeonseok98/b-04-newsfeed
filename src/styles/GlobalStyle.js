import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
    :root {
      --white: #ffffff;
      --black: #121212;
      --white-background-color: #ffffff;
      --black-background-color: #121212;
      --primary-red-color: #E0012C;
      --secondary-color: #FFBF00;


      --color-black-10: #F4F2F2;
      --color-black-20: #E9E5E6;
      --color-black-30: #BFB9BB;
      --color-black-40: #7F7A7C;
      --color-black-50: #2A2829;
      --color-black-60: #241D21;
      --color-black-70: #1E141B;
      --color-black-80: #180C16;
      --color-black-90: #140712;

      --color-red-10: #FDD4CA;
      --color-red-20: #FBA097;
      --color-red-30: #F56263;
      --color-red-40: #EC3B4D;
      --color-red-50: #E0012C;
      --color-red-60: #C00037;
      --color-red-70: #A1003E;
      --color-red-80: #81003E;
      --color-red-90: #6B003D;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html, body {
    min-height: 100vh;
    font-size: 62.5%; /* 10px */
  } 

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
