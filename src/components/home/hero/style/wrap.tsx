import styled from "@emotion/styled";

const HomeHeroWrap = styled.section`
  height: calc(100vh - 37px);
  background-image: linear-gradient(#02020267, #00000025);
  background-size: cover;
  padding-top: 54px;
  display: grid;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-color: #000000;
  border-style: solid;
  border-width: 0;
  overflow-x: hidden;


  video {
    position: absolute;
    z-index: -1;
    width: 110%;
    height: 120%;
    object-fit: cover;
    top: 0;
    left: 0;
  }
`;

export default HomeHeroWrap;
