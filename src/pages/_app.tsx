import React, { Fragment } from "react";
import { AppProps } from "next/app";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import GlobalStyle from "@components/shared/style";
import theme from "@utils/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <GlobalStyle/>
                <Component {...pageProps} />
            </ThemeProvider>
        </MuiThemeProvider>
    );
};

export default MyApp;
