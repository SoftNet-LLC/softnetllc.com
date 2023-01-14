import styled from '@emotion/styled';

interface Props {
    color?: string;
}

const H4 = styled.h4<Props>`
    font-size: 24px;
    color: ${({ color }) => (color === 'light' ? '#ffffff' : '#000000')};
`;

export default H4;
