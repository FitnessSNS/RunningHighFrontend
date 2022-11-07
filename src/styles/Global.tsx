import { Global, css } from '@emotion/react';
import reset from 'styled-reset';

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}

      * {
        box-sizing: border-box;
        letter-spacing: -0.25px;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      input {
        margin: 0;
        padding: 0;
      }

      button {
        cursor: pointer;
      }
    `}
  />
);
