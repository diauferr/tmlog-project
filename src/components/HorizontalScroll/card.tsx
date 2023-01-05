import React, { useContext } from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

import styled from "styled-components";

export function Card({
  itemId,
  selected,
  onClick,
  title,
}: {
  itemId: string;
  selected: boolean;
  onClick: Function;
  title: string;
}) {
  const visibility = useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <Container
      onClick={() => onClick()}
      role="button"
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "160px",
        userSelect: "none",
      }}
      tabIndex={0}
      className="card"
    >
      <div>
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
      />
    </Container>
  );
}

const Container = styled.div`
	border: "1px solid",
	display: "inline-block",
	margin: "0 10px",
	width: "160px",
	userSelect: "none",
`;
