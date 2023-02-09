import styled from "@emotion/styled";

interface Props {
    color?: string;
}

const H2 = styled.h2<Props>`
  font-size: 42px;
  color: ${({ color }) => (color === "light" ? "#ffffff" : "#000000")};
  margin-bottom: 12px;
  line-height: 1.5;
  
  mark {
    color: ${({ theme }: any) => `${theme.palette.secondary.main}`};
    background-color: transparent;
  }

  ${({ theme }: any) => `${theme.breakpoints.down("lg")} {
    font-size: 36px;
  }`}

  ${({ theme }: any) => `${theme.breakpoints.down("md")} {
    font-size: 28px;
  }`}

  ${({ theme }: any) => `${theme.breakpoints.down("sm")} {
    font-size: 24px;
  }`}
`;

export default H2;
