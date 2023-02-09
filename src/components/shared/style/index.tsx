import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
    return (
        <Global
            styles={css`
              html,
              body {
                overflow-x: hidden;
              }

              * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                font-family: 'IBM Plex Mono', monospace;
              }

              img {
                max-width: 100%;
                height: auto;
              }
            `}
        />
    );
};

export default GlobalStyle;
