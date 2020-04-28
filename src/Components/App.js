import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { setThemeColors, createTheme } from "../Theme";
import theme from "../Theme";
import Header from "./Content/Header"
import Cards from "./Content/Cards";
import Buttons from "./Content/Buttons";

class App extends React.Component {
  getColors = () => {
    let colors = {
      secondary: "#4b0082",
      primary: "#FF6347",
    }

    return setThemeColors(colors);
  }

  render() {
    return (
      <ThemeProvider theme={this.getColors()}>
        <Header />
        <Cards />
        <Buttons />
      </ThemeProvider>
    )
  }
}

export default App;