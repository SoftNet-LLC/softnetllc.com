import styled from "@emotion/styled";

interface Props {
    color?: string;
}

const H2 = styled.h2<Props>`
  font-size: 42px;
  color: ${({ color }) => (color === "light" ? "#ffffff" : "#000000")};

  mark {
    color: #f20091;
    background-color: transparent;
  }
`;

export default H2;
