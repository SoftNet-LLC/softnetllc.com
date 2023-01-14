import styled from "@emotion/styled";

const P1 = styled.p`
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  color: ${({ color }) => (color === "light" ? "#ffffff" : "#000000")};

  ${({ theme }: any) => `${theme.breakpoints.down("lg")} {
    font-size: 18px;
     line-height: 24px;
  }`}

  ${({ theme }: any) => `${theme.breakpoints.down("md")} {
    font-size: 14px;
     line-height: 20px;
  }`}
`;

export default P1;
