import styled from '@emotion/styled';

interface Props {
    color?: string;
}

const H3 = styled.h3<Props>`
    font-size: 36px;
    color: ${({ color }) => (color === 'light' ? '#ffffff' : '#000000')};
`;

export default H3;
