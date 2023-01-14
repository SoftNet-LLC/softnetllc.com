import styled from '@emotion/styled';
import { TextField } from '@mui/material';

const FormInput = styled(TextField)`
    .MuiOutlinedInput-root {
        border-radius: 0px;
    }
    input,
    label {
        font-size: 14px;
    }
`;

export default FormInput;