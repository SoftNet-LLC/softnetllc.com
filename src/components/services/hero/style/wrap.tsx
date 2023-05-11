import styled from "@emotion/styled";

const ServicesHeroWrap = styled.section`
  min-height: 550px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #0000004f;
  
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  
  h1 {
    font-size: 42px;
    margin-bottom: 12px;
    color: #ffffff;
  }
  
  p {
    margin-bottom: 24px;
    color: #eeeeee;
  }
  
  img {
    margin-top: 25px;
    height: 400px;
    width: auto;
    overflow: hidden;
    object-fit: contain;
  }

  ${({ theme }: any) => `${theme.breakpoints.down("sm")} {
     margin-top: 46px;
  }`}
`

export default ServicesHeroWrap
