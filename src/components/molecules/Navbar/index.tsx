import React, { useState, useRef, useEffect } from "react";
import { Select } from "antd";

import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

import * as S from "./styles";

import Logo from "../../../assets/logo-full-blue.svg";

const options = [
    {
        value: "en-US",
        label: "English"
    },
    {
        value: "pt-BR",
        label: "Português"
    },
    {
        value: "es",
        label: "Español"
    }
];

export const Navbar = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState(`${navigator.language}`);

    function handleChangeLanguage(language: string) {
        // Trocando o idioma na chamada da função
        i18n.changeLanguage(language);
    }

    const data = [
        {
            key: 0,
            title: `${t("Home")}`
        },
        {
            key: 1,
            title: `${t("Services")}`
        },
        {
            key: 2,
            title: `${t("About")}`
        },
        {
            key: 3,
            title: `${t("Quote")}`
        }
    ];

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <S.Container>
            {/* <span>
                W: {windowSize.innerWidth} x H: {windowSize.innerHeight}
            </span> */}
            <S.Navbar>
                <S.WrapperLeft>
                    <S.Logo src={Logo} />
                    <Select
                        defaultValue={value}
                        style={{
                            width: 110
                        }}
                        onChange={handleChangeLanguage}
                        options={options}
                    />
                </S.WrapperLeft>
                <S.WrapperRight>
                    <S.List>
                        {data.map((item) => (
                            <S.Item key={item.key}>
                                <S.Link href="#">{item.title}</S.Link>
                            </S.Item>
                        ))}
                    </S.List>
                </S.WrapperRight>
            </S.Navbar>
        </S.Container>
    );
};

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}
