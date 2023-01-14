import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export type BreakpointType = "mob" | "web" | "tab"

const useBreakpoints = (): BreakpointType =>
{
    const theme = useTheme();
    const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const onlyLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    return onlyLargeScreen ? "web" : onlySmallScreen ? "mob" : "tab";
};

export default useBreakpoints;
