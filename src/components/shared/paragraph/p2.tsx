import styled from "@emotion/styled";

const P2 = styled.p`
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    color: ${({ color }) => (color === "light" ? "#ffffff" : "#000000")};
`;

export default P2;
