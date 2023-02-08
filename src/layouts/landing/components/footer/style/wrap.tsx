import styled from "@emotion/styled";


const FooterWrap = styled.footer`
  padding: 90px 0 0;
  background-color: #1f1f1f;

  h2 {
    font-size: 24px;
  }
  
  p {
    color: #aaa;
  }

  li {
    color: #aaaaaa;
    list-style: none;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 15px;
    margin-bottom: 21px;
  }

  .nav-link {
    color: #f0f0f0;
    text-decoration: none;
    font-size: 16px;
    display: block;
    margin-bottom: 20px;
  }
  
  .copy-right{
    padding: 20px 12px;
    p {
      margin: 0;
      text-transform: uppercase;
      font-size: 10px;
      color: #aaaaaa;
      line-height: 1.5;
      a {
        color: #f0f0f0;
        text-decoration: none;
      }
    }
  }

  ${({ theme }: any) => `${theme.breakpoints.down("lg")} {
    padding: 50px 0 0;
  }`}
`;

export default FooterWrap;