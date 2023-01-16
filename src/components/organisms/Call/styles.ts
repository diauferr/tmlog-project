import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ecf2ff;
    margin: 48px 0 48px 0;
    padding: 60px 20px 60px 20px;
    text-align: center;

    h1 {
        font-family: "Poppins Bold";
        font-size: 36px;
        color: #333333;
    }

    p {
        font-family: "Poppins Regular";
        font-size: 16px;
        color: #333333;
        max-width: 750px;
        text-align: center;
    }

    .btn {
        font-family: "Poppins Bold";
        font-size: 14px;
        background-color: #495cc0;
        color: #fff;
    }
`;
