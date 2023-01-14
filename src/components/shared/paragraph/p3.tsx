import styled from '@emotion/styled';

const P3 = styled.p`
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    color: ${({ color }) => (color === 'light' ? '#ffffff' : '#000000')};
`;

export default P3;
