import { useMediaQuery, useTheme } from "@mui/material";
import { BreakpointType } from "@utils/types/breakpoint.type";

const useBreakpoints = (): BreakpointType =>
{
    const theme = useTheme();

    const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const onlyLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    return onlyLargeScreen ? "web" : onlySmallScreen ? "mob" : "tab";
};

export default useBreakpoints;
