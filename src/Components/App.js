import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from "../Theme";
import { setThemeColors, setThemeFonts } from "../Theme/helpers";

import Header from "./Content/Header"
import Cards from "./Content/Cards";
import Buttons from "./Content/Buttons";

class App extends React.Component {
  state = {
    feed: {
      "ui": {
        "theme": {
            "colors": {
              "primary": "#090A0D",
              "secondary": "#2A3640",
              "tertiary": "#536473",
              "quaternary": "#D9B471",
              "quinary": "#BFA169"
            },
            "fonts": {
              "fontSize": 32
            }
          }
        }
      }
    }

  render() {
    let theme = createTheme(setThemeColors(this.state.feed.ui.theme.colors), setThemeFonts(this.state.feed.ui.theme.fonts));

    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route exact path="/trials" component={() => <div>Trials</div>} />
            <Route exact path="/play" component={() => <div>Play</div>} />
            <Route exact path="/contact" component={() => <div>Contact</div>} />
          </Switch>
          <Cards />
          <Buttons />
        </BrowserRouter>
        
      </MuiThemeProvider>
    )
  }
}

export default App;