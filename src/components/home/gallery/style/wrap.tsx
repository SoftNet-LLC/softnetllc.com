import styled from "@emotion/styled";

const HomeGalleryWrap = styled.section`
  padding: 52px 0;
  overflow: hidden;
  
  .gallery {
    animation: marquee 30s linear infinite;
    animation-delay: 1s;
    @keyframes marquee {
      0% {
        transform: translate(-100%, 0);
      }
      100% {
        transform: translate(0, 0);
      }
    }
    
    :last-child {
      animation: marquee1 30s linear infinite;
      animation-delay: 1s;
    }

    @keyframes marquee1 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(-100%, 0);
      }
    }
  }
`

export default HomeGalleryWrap