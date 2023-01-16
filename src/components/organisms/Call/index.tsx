import React from "react";

import { useTranslation } from "react-i18next";

import { Button } from "antd";

import * as S from "./styles";

export const Call = () => {
    const { t } = useTranslation();
    return (
        <S.Container>
            <h1>{t("Reach your destination 100% sure and safe")}</h1>
            <p>
                {t(
                    "We work with the right partners around the world and our goal is to always maintain long-lasting strategic relationships, providing opportunities to offer a global solution with confidence and security in all our projects. We have partnerships agents to better meet your demands."
                )}
            </p>
            <Button size="large" className="btn">
                {t("CONTACT NOW")}
            </Button>
        </S.Container>
    );
};
