import styled from '@emotion/styled';

interface Props {
    color?: string;
}

const H2 = styled.h2<Props>`
    font-size: 42px;
    color: ${({ color }) => (color === 'light' ? '#ffffff' : '#000000')};

    span {
        color: #f20091;
    }
`;

export default H2;
