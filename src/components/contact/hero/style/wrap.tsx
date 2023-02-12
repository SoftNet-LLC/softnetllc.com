import styled from "@emotion/styled";

const ContactHeroWrap = styled.section`
  margin-top: 56px;
  min-height: 550px;
  background-color: #f0f0f0;
  position: relative;

  .contact-info {
    position: absolute;
    width: 100%;
    bottom: -80px;

    .contact-info-card {
      padding: 16px 24px;
      min-height: 120px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      height: 100%;
      width: 300px;
      background-color: ${({ theme }: any) => `${theme.palette.info.main}`};
      
      h2 {
        color: #f0f0f0;
        font-size: 18px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        grid-gap: 12px;
        letter-spacing: 1px;
        line-height: 1;
      }
      
      p {
        font-size: 14px;
        color: #eeeeee;
        line-height: 2;
        a {
          svg {
            color: ${({ theme }: any) => `${theme.palette.secondary.main}`};
          }
          display: flex;
          align-items: center;
          grid-gap: 5px;
          color: #eeeeee;
          text-decoration: none;
        }
      }
    }
  }
`

export default ContactHeroWrap
