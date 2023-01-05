import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./global";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#5065D3",
    secondary: "#FFFFFF",
  },
  size: {
    h1: 48,
    h2: 36,
    h3: 24,
    h4: 20,
    h5: 16,
    h6: 14,
    p: 16,
    pr: 14,
    ps: 13,
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
