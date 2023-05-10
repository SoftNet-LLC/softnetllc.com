import styled from "@emotion/styled";

const AuthLayoutWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 102px 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
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
    left: 25px;
    top: 25px;
    z-index: 1;
  }
  
  .auth-card {
    z-index: 1;
    max-width: 540px;
    width: 100%;
    background-color: #1f1f1f;
    border-radius: 24px;
    padding: 42px 32px 42px;
    box-shadow: rgba(0, 0, 0, 0.45) 0 25px 20px -20px;

    h1 {
      font-size: 32px;
      font-weight: bold;
      color: #ffffff;
      text-align: center;
      text-transform: uppercase;
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
`

export default AuthLayoutWrap
