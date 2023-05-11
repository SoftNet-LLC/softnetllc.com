import styled from "@emotion/styled";

const HomeGalleryWrap = styled.section`
  padding: 24px 0;
  overflow: hidden;
  
  img {
    opacity: .6;
    transition: all .5s;
    
    :hover {
      opacity: .8;
      transition: all .5s;
    }
  }
  
  .gallery {
    animation: marquee 100s linear infinite;
    animation-delay: 2s;
    display: grid;
    grid-template-columns: repeat(20, 384px);
    gap: 16px;
    .gallery-item {
      width: 384px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      img {
        :last-child {
          transform: translateX(-197px);
        }
      }
    }
    
    @keyframes marquee {
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