import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// react router dom
import { BrowserRouter } from "react-router-dom";
// styles
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./assets/styles/index.scss";
// redux stuff
import { Provider } from "react-redux";
import { store } from "./app/store";
// theme
const theme = createTheme({
  typography: {
    fontFamily: ["Comfortaa", "M PLUS Rounded 1c", "Nunito"].join(","),
    fontSize: 15,
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightRegular: 600,
    fontWeightBold: 700,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
