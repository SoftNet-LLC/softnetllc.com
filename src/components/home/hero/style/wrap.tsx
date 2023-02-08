import styled from "@emotion/styled";

const HomeHeroWrap = styled.section`
  height: 100vh;
  background-image: linear-gradient(#020202e7, #00000055);
  background-size: cover;
  padding-top: 54px;
  display: grid;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-color: #000000;
  border-style: solid;
  border-width: 0px;


  video {
    filter: blur(4px);
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
