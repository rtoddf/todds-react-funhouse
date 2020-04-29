import React from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from "../Theme";
import { setThemeColors } from "../Theme/helpers";

import Header from "./Content/Header"
import Cards from "./Content/Cards";
import Buttons from "./Content/Buttons";

class App extends React.Component {
  state = {
    feed: {
      "ui": {
        "theme": {
            "colors": {
              "primary": "#242326",
              "secondary": "#F2E205",
              "tertiary": "#F2B705",
              "quaternary": "#F2B705",
              "quinary": "#D96523"
            },
            "fonts": {

            }
          }
        }
      }
    }

  render() {
    let theme = createTheme(setThemeColors(this.state.feed.ui.theme.colors));

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