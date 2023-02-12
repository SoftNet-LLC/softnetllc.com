import styled from "@emotion/styled";

const AboutHeroWrap = styled.section`
  margin-top: 55px;
  min-height: 550px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }: any) => `${theme.palette.info.main}8f`};

  h1 {
    font-size: 42px;
    color: #ffffff;
    margin-bottom: 12px;
  }

  h2 {
    color: #ffffff;
    font-size: 24px;
    margin-top: 24px;
    text-align: center;
    letter-spacing: 1px;
  }

  p {
    color: #f0f0f0;
  }

  .hero-wrap {
    padding: 24px;

    p {
      margin-bottom: 52px;
    }
  }

  .video-wrap {
    position: relative;

    video {
      height: calc(550px - 55px);
      width: 100%;
      object-fit: cover;
    }
  }
`

export default AboutHeroWrap
