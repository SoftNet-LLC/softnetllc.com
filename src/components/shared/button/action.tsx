import styled from "@emotion/styled";
import { Button } from "@mui/material";

const ActionButton = styled(Button)`
    height: 54px;
    font-size: 17px;
    min-width: 250px;

    &.light {
        backdrop-filter: blur(4px);
        border-width: 1px;
        color: #ffffff;
        border-color: #ffffff;
    }
`;

export default ActionButton;
