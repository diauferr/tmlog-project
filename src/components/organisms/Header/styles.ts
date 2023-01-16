import styled from "styled-components";

import coverHero from "../../../assets/cover-header.jpg";
import coverHeroOpacity from "../../../assets/cover-header-opacity.png";

export const Container = styled.div`
    background-image: url(${coverHeroOpacity});
    background-repeat: no-repeat;
    background-position: right top;
    background-size: cover;
    margin: 0 0 64px 0;

    @media (min-width: 768px) {
        background-image: url(${coverHeroOpacity});
        background-size: contain;
        height: 520px;
    }

    @media (min-width: 1024px) {
        background-image: url(${coverHeroOpacity});
    }

    @media (min-width: 1280px) {
        background-image: url(${coverHero});
        height: 660px;
    }
`;
