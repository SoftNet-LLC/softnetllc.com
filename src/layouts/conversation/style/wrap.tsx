import styled from "@emotion/styled";

const ConversationWrap = styled.section`
  background-color: ${({ theme }: any) => `${theme.palette.secondary.main}3f`};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 102px 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .talk {
    color: #333;
    line-height: 2.5;
    b {
      color: #000;
    }
  }
  

  .logo-image {
    width: 51px;
    height: auto;
    position: absolute;
    left: 25px;
    top: 25px;
  }
  
  .progress-bar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .action-area{
    position: absolute;
    bottom: 24px;
    left: 0;
    width: 100%;
    text-align: center;
    
    button {
      svg {
        width: 16px;
        height: 16px;
      }
    }
    p {
      margin-top: 24px;
    }
  }
  
  .widget-content{
    display: flex;
    height: 100%;
    flex-direction: column;
    max-width: 800px;
    width: 100%;
    
    h2 {
      font-size: 24px;
      display: flex;
      align-items: center;
      grid-gap: 8px;
      svg {
        color: #444444;
      }
    }
  }

  h1 {
    position: absolute;
    left: 100px;
    top: 32px;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1;
    font-size: 24px;
  }
`

export default ConversationWrap
