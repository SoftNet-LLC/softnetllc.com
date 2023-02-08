import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: ["IBM Plex Mono", "sans-serif"].join(","),
    },

    palette: {
        primary: {
            main: "#000000",
            light: "#000000",
            dark: "#000000",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#f20091",
            light: "#f20091",
            dark: "#f20091",
            contrastText: "#FFFFFF",
        },
        success: {
            main: "#006A00",
            light: "#006A00",
            dark: "#006A00",
            contrastText: "#FFFFFF",
        },
        warning: {
            main: "#EEBB00",
            light: "#EEBB00",
            dark: "#EEBB00",
            contrastText: "#FFFFFF",
        },
        error: {
            main: "#FF0000",
            light: "#FF0000",
            dark: "#FF0000",
            contrastText: "#FFFFFF",
        },
        info: {
            main: "#0000FF",
            light: "#0000FF",
            dark: "#0000FF",
            contrastText: "#FFFFFF",
        },
        grey: {},
        common: {},
        text: {},
        action: {},
        background: {},
    },

    components: {
        MuiButton: {
            defaultProps: {
                sx: {
                    borderRadius: 0,
                },
            },
        },
        MuiAppBar: {
            defaultProps: {
                sx: {
                    backgroundColor: "#fff",
                    boxShadow: "none",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
                },
            },
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: "xl",
            },
        },
        MuiCard: {
            defaultProps: {
                sx: {
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,.15)",
                    borderRadius: 0,
                },
            },
        },
    },
});

export default theme;
