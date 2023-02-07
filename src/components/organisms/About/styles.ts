import styled from "styled-components";

export const Container = styled.div`
    .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
        display: none;
    }

    .react-horizontal-scrolling-menu--scroll-container {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        margin-left: 60px;
    }

    @media (min-width: 1024px) {
        margin-left: 180px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 24px;

    div {
        margin-right: 30px;
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

    @media (min-width: 768px) {
        max-width: 1224px;
    }
`;
