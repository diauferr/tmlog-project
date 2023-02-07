import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    min-width: 340px;
    margin-top: 100px;
    margin-left: 24px;
`;

export const Wrapper = styled.div`
    max-width: 360px;

    h1 {
        font-family: "Poppins Bold";
        font-size: 44px;
        color: #333333;
    }

    p {
        font-family: "Poppins Regular";
        font-size: 16px;
        color: #333333;
    }

    .btn {
        font-family: "Poppins Bold";
        font-size: 14px;
        background-color: #495cc0;
        color: #fff;
    }

    @media (min-width: 768px) {
        margin-left: 100px;
    }

    @media (min-width: 1024px) {
        max-width: 660px;
    }
`;
