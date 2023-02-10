import styled from "@emotion/styled";

const ServicesHeroWrap = styled.section`
  margin-top: 92px;
  min-height: 450px;
  display: flex;
  align-items: center;
  
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
