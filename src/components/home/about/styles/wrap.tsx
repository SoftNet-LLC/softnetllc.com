import styled from '@emotion/styled';

const HomeAboutWrap = styled.div`
    padding: 130px 0 65px;
    overflow: hidden;
    position: relative;

    div {
        display: grid;
        grid-template-columns: repeat(4, 500px);
        grid-gap: 16px;
        transform: translateX(-250px);
    }

    h1 {
        font-size: 116px;
        opacity: 0.8;
        font-weight: 700;
        color: #ffffff;
        position: absolute;
        z-index: 1;
        top: calc(50% + 50px);
        transform: translateY(-50%);
        left: 150px;
        text-shadow: 1px 1px 6px #353535;
    }
`;

export default HomeAboutWrap;
