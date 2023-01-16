import React from "react";

import { Button } from "antd";

import * as S from "./styles";

import { useTranslation } from "react-i18next";

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <S.Container>
            <S.Wrapper>
                <h1>
                    {t("Reliability and agility")} <br />
                    {t("in international logistics")}
                </h1>
                <p>
                    {t(
                        "optimal shipping options, minimized delays, competitive rates, and personalized service for each demand."
                    )}
                </p>
                <Button size="large" className="btn">
                    {t("LEARN MORE")}
                </Button>
            </S.Wrapper>
        </S.Container>
    );
};
