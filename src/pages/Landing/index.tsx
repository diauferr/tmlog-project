import React from "react";

import { Header } from "../../components/organisms/Header";
import { Services } from "../../components/organisms/Services";
import { About } from "../../components/organisms/About";
import { Call } from "../../components/organisms/Call";
import { News } from "../../components/organisms/News";
import { Quote } from "../../components/organisms/Quote";
import { Map } from "../../components/organisms/Map";
import { Footer } from "../../components/organisms/Footer";

import * as S from "./styles";

export const Landing = () => {
    return (
        <S.Container>
            <Header />
            <Services />
            <About />
            <Call />
            {/* <News /> */}
            <Quote />
            {/* <Map /> */}
            <Footer />
        </S.Container>
    );
};
