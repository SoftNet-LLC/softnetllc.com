import styled from "@emotion/styled";

const NotificationWrap = styled.div`
  background: #ffffff;
  padding: 12px 0;
  position: relative;
  
  h2 {
    letter-spacing: 1px;
    line-height: 1;
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    
    span {
      color: #e32652;
    }
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    color: #000;
    right: 16px;
  }
`

export default NotificationWrap