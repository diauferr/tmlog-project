import React from "react";

import { Navbar } from "../../molecules/Navbar";
import { Hero } from "../../molecules/Hero";

import * as S from "./styles";

export const Header = () => {
    return (
        <S.Container>
            <Navbar />
            <Hero />
        </S.Container>
    );
};
