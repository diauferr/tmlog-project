import React from "react";

import { Button } from "antd";

import * as S from "./styles";

export const Hero = () => {
    return (
        <S.Container>
            <S.Wrapper>
                <h1>
                    We guarantee the highest <br /> efficiency rate,
                </h1>
                <p>
                    optimal shipping options, minimized delays, competitive
                    rates, and personalized service for each demand.
                </p>
                <Button size="large" className="btn">
                    LEAR MORE
                </Button>
            </S.Wrapper>
        </S.Container>
    );
};
