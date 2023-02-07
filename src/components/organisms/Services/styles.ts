import styled from "styled-components";

import CoverServices from "../../../assets/service_bg.png";

export const Container = styled.div`
    background-image: url(${CoverServices});
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
    margin: 0 0 0 24px;

    @media (min-width: 768px) {
        background-image: url(${CoverServices});
        background-size: contain;
        height: 520px;
        margin-top: 200px;
    }

    @media (min-width: 1024px) {
        margin-top: 100px;
    }

    @media (min-width: 1280px) {
        padding-left: 130px;
        height: 720px;
    }

    .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
        display: none;
    }

    .react-horizontal-scrolling-menu--scroll-container {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`;

export const Wrapper = styled.div`
    max-width: 660px;
    h1 {
        font-family: "Poppins Bold";
        font-size: 36px;
        color: #333333;
    }

    p {
        font-family: "Poppins Regular";
        font-size: 16px;
        color: #333333;
        margin-bottom: 54px;
    }

    .btn {
        font-family: "Poppins Bold";
        font-size: 14px;
        background-color: #495cc0;
        color: #fff;
    }

    @media (min-width: 768px) {
        margin-left: 54px;
    }

    @media (min-width: 1024px) {
    }

    @media (min-width: 1280px) {
        max-width: 660px;
    }
`;
