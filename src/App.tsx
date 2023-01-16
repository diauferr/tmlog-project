import react from "react";

import { Router } from "./router";

import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "./global";

function App() {
    return (
        <Container className="App">
            <GlobalStyle />
            <ThemeProvider theme={theme} />
            <Router />
        </Container>
    );
}

export default App;

const Container = styled.div``;
