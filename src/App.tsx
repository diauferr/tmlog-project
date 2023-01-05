import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { GlobalStyle } from "./global";

import { HorizontalScroll } from "../src/components/HorizontalScroll";

import styled from "styled-components";

function App() {
  return (
    <Container className="App">
      <GlobalStyle />
      <HorizontalScroll />
    </Container>
  );
}

export default App;

const Container = styled.div``;
