import { css, Global } from '@emotion/react';

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

                .slick-arrow.slick-prev,
                .slick-arrow.slick-next {
                    width: 42px;
                    height: 42px;
                    font-size: 32px;
                    color: #ffffff;
                    background-color: #f20091;
                    z-index: 1;

                    :hover,
                    :focus {
                        color: #ffffff;
                        background-color: #f20091;
                    }
                }

                .slick-prev:before,
                .slick-next:before {
                    display: none;
                }
            `}
        />
    );
};

export default GlobalStyle;
