import styled from "@emotion/styled";

const AboutTeamWrap = styled.section`
  text-align: center;
  padding: 102px 0;

  .member-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    width: 250px;
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;
    transition: all .5s;

    img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      transition: all .5s;
    }

    .name-area {
      position: absolute;
      bottom: 32px;
      left: 0;
      padding: 12px 24px;
      background-color: #0000007f;
      min-width: 200px;

      p {
        font-weight: 600;
        color: #ffffff;
      }

      p.job {
        padding: 3px 12px;
        background-color: #000000;
        color: #aaaaaa;
        margin-bottom: -24px;
        font-size: 12px;
      }
    }

    :hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0 60px 40px -7px;
      transition: all .5s;

      img {
        transform: scale(1.02);
        transition: all .5s;
      }
    }
  }
`

export default AboutTeamWrap
