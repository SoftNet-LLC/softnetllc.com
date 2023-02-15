import styled from "@emotion/styled";

const HomeExpertiseWrap = styled.section`
  padding: 65px 0 130px;
  width: 100%;
  overflow-x: hidden;

  h2, p {
    text-align: center;
    margin-bottom: 0;
  }

  ${({ theme }: any) => `${theme.breakpoints.down("md")} {
    padding: 32px 0 65px;
  }`}
`;

export default HomeExpertiseWrap;
