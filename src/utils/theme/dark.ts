import { createTheme } from "@mui/material/styles";

const dark = createTheme({
    typography: {
        fontFamily: ["IBM Plex Mono", "sans-serif"].join(","),
    },

    palette: {
        primary: {
            main: "#ffffff"
        },
    },
});

export default dark;
