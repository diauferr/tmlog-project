import styled from "styled-components";

export const Container = styled.div`
    border-top: 2px solid #495cc0;
    margin: 0 40px 32px 40px;
    padding-top: 24px;
    display: flex;
    flex-direction: column;

    .logo {
        width: 220px;
    }

    h4 {
        font-family: "Poppins Bold";
        font-size: 18px;
        color: #333333;
    }

    p {
        font-family: "Poppins Regular";
        font-size: 16px;
        color: #333333;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin: 8px 0 0 0;
    }

    a {
        text-decoration: none;
        color: #495cc0;
    }

    a:visited {
        color: #495cc0;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        .links {
            min-height: 200px;
        }

        .touch {
            min-height: 200px;
        }

        .social {
            min-height: 200px;
        }
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    .icon {
        margin-right: 10px;
        width: 40px;
        height: 40px;
    }
`;
