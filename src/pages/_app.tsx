import { AppProps } from "next/app";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import { light } from "utils/theme";
import { GlobalStyle } from "components/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps)
{
    return (
        <MuiThemeProvider theme={light}>
            <ThemeProvider theme={light}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </MuiThemeProvider>
    );
}

export default MyApp;
