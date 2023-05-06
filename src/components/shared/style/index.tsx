import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
    return (
        <Global
            styles={css`
              * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
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

              a {
                font-weight: 500;
              }
            `}
        />
    );
};

export default GlobalStyle;
