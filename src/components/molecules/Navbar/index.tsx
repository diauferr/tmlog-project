import React, { useState, useRef, useEffect } from "react";
import { Select } from "antd";

import * as S from "./styles";

import Logo from "../../../assets/logo-full-blue.svg";

const data = [
    {
        key: 0,
        title: "Home"
    },
    {
        key: 1,
        title: "Services"
    },
    {
        key: 2,
        title: "About"
    },
    {
        key: 3,
        title: "Quote"
    }
];

const options = [
    {
        value: "en",
        label: "English"
    },
    {
        value: "pt",
        label: "Português"
    },
    {
        value: "es",
        label: "Español"
    }
];

export const Navbar = () => {
    const [value, setValue] = useState("English");

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        setValue(`${value}`);
    };

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
            <span>
                W: {windowSize.innerWidth} x H: {windowSize.innerHeight}
            </span>
            <S.Navbar>
                <S.WrapperLeft>
                    <S.Logo src={Logo} />
                    <Select
                        defaultValue={value}
                        style={{
                            width: 110
                        }}
                        onChange={handleChange}
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
