import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
    return (
        <Global
            styles={css`

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

              .header-action {
                //background-color: #F6E009 !important;
                //color: #000!important;
                //box-shadow: none!important;
              }

              a {
                color: #B31942;
                font-weight: 500;
              }
            `}
        />
    );
};

export default GlobalStyle;
