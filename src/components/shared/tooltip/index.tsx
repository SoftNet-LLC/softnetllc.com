import styled from "@emotion/styled";
import { Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps & {children: any}) => (
    <Tooltip
        {...props}
        arrow
        classes={{ popper: className }}
        style={{ color: "#e32652" }}>
        {props.children}
    </Tooltip>
))(({ theme }: any) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
}));

export default BootstrapTooltip
