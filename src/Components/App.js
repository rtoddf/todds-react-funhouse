import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { setThemeColors, createTheme } from "../Theme";

import Header from "./Content/Header"
import Cards from "./Content/Cards";
import Buttons from "./Content/Buttons";

class App extends React.Component {
  getColors = () => {
    let colors = {
      primary: "#ae0000",
      secondary: "#4b0082",
    }

    return setThemeColors(colors);
  }

  render() {
    let theme = createTheme(this.getColors());

    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Cards />
        <Buttons />
      </MuiThemeProvider>
    )
  }
}

export default App;