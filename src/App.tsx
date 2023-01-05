import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { GlobalStyle } from "./global";

import { Services } from "./pages/Services";

import styled from "styled-components";

function App() {
  return (
    <Container className="App">
      <GlobalStyle />
      <Services />
    </Container>
  );
}

export default App;

const Container = styled.div``;
