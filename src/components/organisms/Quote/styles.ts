import styled from "styled-components";

import CoverQuote from "../../../assets/cover-quote.jpg";

export const Container = styled.div`
    margin: 0 24px 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${CoverQuote});
    background-size: cover;
    background-repeat: no-repeat;

    .ant-input {
        resize: none;
    }

    .btn {
        font-family: "Poppins Bold";
        font-size: 14px;
        background-color: #495cc0;
        color: #fff;
    }

    h1 {
        font-family: "Poppins Bold";
        font-size: 36px;
        color: #333333;
    }

    p {
        font-family: "Poppins Regular";
        font-size: 16px;
        color: #333333;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;

export const Wrapper = styled.div`
    overflow-x: hidden;
    @media (min-width: 768px) {
        min-width: 600px;
    }
`;
