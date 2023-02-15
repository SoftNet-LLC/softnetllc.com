import styled from "@emotion/styled";

const HomeHeroWrap = styled.section`
  height: calc(100vh - 37px);
  width: 100%;
  padding-top: 54px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(#000000ef, #0000006f, #0000005f);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding-top: 54px;
  }

  ${({ theme }: any) => `${theme.breakpoints.down("sm")} {
    height: 100vh;
  }`}
`;

export default HomeHeroWrap;
