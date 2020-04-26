import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../Theme";
import Header from "./Content/Header"
import Cards from "./Content/Cards";
import Buttons from "./Content/Buttons";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Cards />
        <Buttons />
      </ThemeProvider>
    )
  }
}

export default App;