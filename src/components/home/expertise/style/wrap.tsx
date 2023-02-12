import styled from "@emotion/styled";

const HomeExpertiseWrap = styled.section`
  padding: 65px 0 130px;

  h2, p {
    text-align: center;
  }

  ${({ theme }: any) => `${theme.breakpoints.down("md")} {
    padding: 32px 0 65px;
    h2 {
      text-align: left;
    }
  }`}
`;

export default HomeExpertiseWrap;
