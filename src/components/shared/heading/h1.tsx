import styled from "@emotion/styled";

interface Props {
    color?: string;
}

const H1 = styled.h1<Props>`
  font-size: 60px;
  color: ${({ color }) => (color === "light" ? "#ffffff" : "#000000")};

  ${({ theme }: any) => `${theme.breakpoints.down("lg")} {
    font-size: 40px;
  }`}

  ${({ theme }: any) => `${theme.breakpoints.down("md")} {
    font-size: 32px;
  }`}
`;

export default H1;
