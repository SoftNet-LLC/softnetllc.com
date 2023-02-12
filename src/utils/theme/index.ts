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
            main: "#B31942",
            light: "#B31942",
            dark: "#B31942",
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
            main: "#0A3161",
            light: "#0A3161",
            dark: "#0A3161",
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
        MuiOutlinedInput: {
            defaultProps: {
                sx: {
                    borderRadius: 0
                }
            }
        }
    },
});

export default theme;
