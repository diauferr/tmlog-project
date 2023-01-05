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
  link,
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
        transition: "margin 0.2s ease-in",
        marginTop: hover ? "-12px" : "0px",
        backgroundColor: "white",
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
  color: #5a95fe;
`;
