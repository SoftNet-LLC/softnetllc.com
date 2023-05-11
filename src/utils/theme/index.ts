import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: ["Roboto Mono", "monospace"].join(","),
    },

    palette: {
        primary: {
            main: "#e32652",
            light: "#e32652",
            dark: "#e32652",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#e0e0e0",
            light: "#e0e0e0",
            dark: "#e0e0e0",
            contrastText: "#1f1f1f",
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
                    borderRadius: "6px",
                    borderWidth: "1px",
                    fontWeight: 700,
                    letterSpacing: "0.3px"
                },
            },
        },
        MuiAppBar: {
            defaultProps: {
                sx: {
                    position: "relative",
                    backgroundColor: "#0e0e0e",
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
                    borderRadius: "12px",
                    border: "1px solid #808080",
                    color: "#e0e0e0"
                }
            }
        },
        MuiInputAdornment: {
            styleOverrides: {
                outlined: {
                    color: "#e0e0e0"
                }
            }
        },
        MuiIcon: {
            defaultProps: {
                color: "primary"
            },
            styleOverrides: {
                colorPrimary: "#e32652",
            }
        },
        MuiCheckbox: {
            defaultProps: {
                color: "primary"
            },
            styleOverrides: {
                colorPrimary: "#e32652"
            }
        }
    },
});

export default theme;
