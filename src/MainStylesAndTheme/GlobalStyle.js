import { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
      html {
        box-sizing: border-box
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
    } 
      body {
        background-color: ${({ theme }) => theme.colors.body.background};
        color: ${({ theme }) => theme.colors.body.text};
        font-family: 'Inter', sans-serif;
        transition: background-color 0.6s;
    }
`;
