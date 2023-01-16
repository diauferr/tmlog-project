import React, { useContext, useState } from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

import styled from "styled-components";

export function Card({
    itemId,
    selected,
    onClick,
    icon,
    title,
    desc,
    link
}: {
    itemId: string;
    selected: boolean;
    onClick: Function;
    icon: string;
    title: string;
    desc: string;
    link: string;
}) {
    const visibility = useContext(VisibilityContext);

    const visible = visibility.isItemVisible(itemId);

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <Container
            onClick={() => onClick()}
            role="button"
            style={{
                border: "1px solid #eee",
                cursor: "pointer",
                display: "inline-block",
                margin: "0 16px",
                width: "220px",
                minHeight: "330px",
                userSelect: "none",
                borderRadius: "10px",
                padding: "31px",
                backgroundColor: "white",
                marginTop: hover ? "-12px" : "0px",
                boxShadow: hover
                    ? "0px 4px 12px -4px rgba(0,0,0,0.15)"
                    : "none",
                MozBoxShadow: hover
                    ? "0px 4px 12px -4px rgba(0,0,0,0.15)"
                    : "none",
                WebkitBoxShadow: hover
                    ? "0px 4px 12px -4px rgba(0,0,0,0.15)"
                    : "none",
                transition: "margin 0.2s ease-in"
            }}
            tabIndex={0}
            className="card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CardIcon src={icon} draggable={false}></CardIcon>
            <CardTitle>{title}</CardTitle>
            <CardDesc>{desc}</CardDesc>
            <CardLink>{link}</CardLink>
            {/* Container with measurements to use as example */}
            {/* <div>
        <div>{title}</div>
        <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
          visible: {JSON.stringify(visible)}
        </div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          backgroundColor: selected ? "green" : "bisque",
          height: "200px",
        }}
      /> */}
        </Container>
    );
}

const Container = styled.div``;

const CardIcon = styled.img`
    max-width: 100px;
`;

const CardTitle = styled.h2`
    font-family: "Poppins Bold", sans-serif;
    font-size: ${(props) => props.theme.size.h3}px;
    color: #333333;
`;

const CardDesc = styled.p`
    font-family: "Poppins Regular", sans-serif;
    font-size: ${(props) => props.theme.size.ps}px;
    line-height: 19px;
    color: #333333;
`;

const CardLink = styled.a`
    font-family: "Poppins Regular", sans-serif;
    font-size: ${(props) => props.theme.size.pr}px;
    line-height: 20px;
    text-decoration: none;
    color: #5a95fe;
    background: linear-gradient(to right, #5a95fe, #5a95fe),
        linear-gradient(to right, #ffffff, #5a95fe, #5a95fe);
    background-size: 100% 1px, 0 1px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
    &:hover {
        background-size: 0 1px, 100% 1px;
    }
`;
