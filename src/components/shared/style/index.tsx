import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
    return (
        <Global
            styles={css`
              ::-webkit-scrollbar {
                width: 5px;
              }

              /* Track */
              ::-webkit-scrollbar-track {
                background: #3f3f3f;
              }

              /* Handle */
              ::-webkit-scrollbar-thumb {
                background: #aaaaaa;
              }

              /* Handle on hover */
              ::-webkit-scrollbar-thumb:hover {
                background: #e32652;
              }
              
              
              * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                user-select: none;
              }

              body {
                background: #000;
                font-family: 'IBM Plex Mono', monospace;
              }

              img {
                max-width: 100%;
                height: auto;
              }

              h1, h2, h3, h4, h5, h6 {
                font-family: 'Big Shoulders Text', cursive;
                font-weight: 500;
              }

              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
                -webkit-transition-delay: 9999s;
              }

              a {
                font-weight: 500;
              }

              .MuiButtonBase-root.Mui-disabled:disabled {
                color: rgb(255 255 255 / 26%);
                box-shadow: none;
                background-color: rgb(255 255 255 / 12%);
              }

              .MuiInputBase-root {
                .MuiSvgIcon-root {
                  color: #808080;
                }
              }
            `}
        />
    );
};

export default GlobalStyle;
