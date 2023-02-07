import React from "react";

import { useTranslation } from "react-i18next";

import { Button } from "antd";

import * as S from "./styles";

export const Call = () => {
    const { t } = useTranslation();
    return (
        <S.Container>
            <h1>
                {t("Join Forces with TMLOG for Efficient Logistics Solutions")}
            </h1>
            <p>
                {t(
                    "Looking for a partner to streamline your international logistics operations? TMLOG offers a full suite of services including air freight, sea freight, road freight, and cargo insurance. Our team of experts will work with you to create a customized solution to meet your unique needs and goals. Contact us today to experience seamless logistics solutions with TMLOG."
                )}
            </p>
            <Button size="large" className="btn">
                {t("CONTACT NOW")}
            </Button>
        </S.Container>
    );
};
