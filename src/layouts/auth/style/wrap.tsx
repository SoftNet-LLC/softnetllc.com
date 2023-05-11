import styled from "@emotion/styled";

const AuthLayoutWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  background: linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%);
  
  .logo-header {
    height: 70px;
    background-color: black;
    margin-bottom: 32px;
  }
  
  .auth-background{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }

  .logo {
    width: 51px;
    height: auto;
    position: absolute;
    z-index: 1;
  }
  
  .auth-card {
    z-index: 1;
    max-width: 700px;
    width: 100%;
    height: calc(100vh - 112px);
    background-color: #000000;
    padding: 72px 155px 102px;
    box-shadow: rgba(0, 0, 0, 0.45) 0 25px 20px -20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 12px;

    h1 {
      font-size: 32px;
      font-weight: bold;
      color: #ffffff;
      text-align: center;
      letter-spacing: 2px;
      line-height: 1;
      margin-bottom: 8px;
    }

    p {
      text-align: center;
      color: #cccccc;
    }
    
    button {
      display: flex;
      align-items: center;
      grid-gap: 4px;
      line-height: 1;
      min-height: 42px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
    
    a {
      color: ${({ theme }: any) => `${theme.palette.secondary.main}`};
    }
    
    .MuiDivider-root {
      color: #aaaaaa;
      :before, :after {
        border-color: #444444;
      }
    }
  }
  
  .MuiTypography-root {
    white-space: nowrap;
  }
`

export default AuthLayoutWrap
