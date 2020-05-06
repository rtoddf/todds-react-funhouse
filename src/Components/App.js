import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from "../Theme";
import { setThemeColors, setThemeFonts } from "../Theme/helpers";

import Header from "./Common/Header";
import Home from "./Home";
import Components from "./MaterialUI";
import Play from "./Play";
import Layouts from "./Layouts";

import Cards from "./MaterialUI/Cards"
import Buttons from "./MaterialUI/Buttons";

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
            <Route exact path="/" render={() => (<Home />)} />
            <Route exact path="/components" render={() => (<Components />)} />
            <Route exact path="/play" render={() => (<Play />)} />
            <Route exact path="/layouts" render={() => (<Layouts />)} />

            <Route exact path="/cards" render={() => (<Cards />)} />
            <Route exact path="/buttons" render={() => (<Buttons />)} />
          </Switch>
        </BrowserRouter>
        
      </MuiThemeProvider>
    )
  }
}

export default App;