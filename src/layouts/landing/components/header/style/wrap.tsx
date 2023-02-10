import styled from "@emotion/styled";

const HeaderWrap = styled.div`
  img {
    width: 51px;
    height: auto;
  }
  
  padding: 8px 0;
  ${({ theme }: any) => `${theme.breakpoints.down("sm")} {
    padding: 0 0;
  }`}
`;

export default HeaderWrap;
