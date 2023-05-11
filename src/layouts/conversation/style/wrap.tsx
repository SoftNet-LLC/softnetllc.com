import styled from "@emotion/styled";

const ConversationWrap = styled.section`
  background-color: ${({ theme }: any) => `${theme.palette.secondary.main}0f`};
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
    color: #b2b2b2;
    line-height: 2.5;

    b {
      color: #ffffff;
    }
  }

  .conversation-header {
    position: absolute;
    top: 20px;
    width: 100%;
  }

  .progress-bar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .action-area {
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

  .widget-content {
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
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1;
    font-size: 24px;
  }
`

export default ConversationWrap
