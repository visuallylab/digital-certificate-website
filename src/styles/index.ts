import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { generateMedia } from 'styled-media-query';

export default createGlobalStyle`
  ${normalize}
  
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    /* Github system font stack https://css-tricks.com/snippets/css/system-font-stack/ */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

export const colors = {
  primary: '#333',
};

export const HEADER_HEIGHT = '48px';

export const breakpoints = {
  xs: '0',
  sm: '48em',
  md: '64em',
  lg: '75em',
};

export const media = generateMedia(breakpoints);
