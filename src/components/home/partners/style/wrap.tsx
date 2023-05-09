import styled from "@emotion/styled";

const HomePartnersWrap = styled.section`
    padding: 20px 0 15px;
    border-bottom: 1px solid #dededea6;

  ${({ theme }: any) => `${theme.breakpoints.down("md")} {
    padding: 60px 0 55px;
  }`}
`;

export default HomePartnersWrap;
