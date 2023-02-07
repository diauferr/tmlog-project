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
                    {t("Connecting businesses globally with efficient")} <br />
                    {t("and reliable international logistics solutions.")}
                </h1>
                <p>
                    {t(
                        "Expanding business horizons with comprehensive international import and export logistics solutions."
                    )}
                </p>
                <Button size="large" className="btn">
                    {t("LEARN MORE")}
                </Button>
            </S.Wrapper>
        </S.Container>
    );
};
