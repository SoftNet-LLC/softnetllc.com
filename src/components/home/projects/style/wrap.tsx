import styled from "@emotion/styled";

const HomeProjectWrap = styled.section`
  padding: 90px 0;
  background-color: #f1f1f1;
  
  img {
    filter: grayscale(1);
    transition: all 0.5s;
    opacity: 0.7;

    :hover {
      filter: grayscale(0);
      transition: all 0.5s;
      opacity: 1;
    }
  }

`;

export default HomeProjectWrap;
