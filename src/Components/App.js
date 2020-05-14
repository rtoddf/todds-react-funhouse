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

import Avatar from "./MaterialUI/Avatar"
import Cards from "./MaterialUI/Cards"
import Buttons from "./MaterialUI/Buttons";
import Dialog from "./MaterialUI/Dialog";

import Overrides from "./Play/Overrides";

class App extends React.Component {
  state = {
    feed: {
      "ui": {
        "themes": {
          "interaction": {
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
          },
          "redCarTrolley": {
            "colors": {
              "primary": "#2B2120",
              "secondary": "#594828",
              "tertiary": "#F0E9CD",
              "quaternary": "#EC7C4A",
              "quinary": "#A63429"
            },
            "fonts": {
              "fontSize": 32
            }
          },
          "kurios": {
            "colors": {
              "primary": "#698581",
              "secondary": "#7F9FA0",
              "tertiary": "#A3CFCC",
              "quaternary": "#876C56",
              "quinary": "#494040"
            },
            "fonts": {
              "fontSize": 32
            }
          }
        }
      }
    }
  }

  render() {
    const whichTheme = this.state.feed.ui.themes.kurios;

    let theme = createTheme(setThemeColors(whichTheme.colors), setThemeFonts(whichTheme.fonts));

    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" render={() => (<Home />)} />
            <Route exact path="/components" render={() => (<Components />)} />
            <Route exact path="/play" render={() => (<Play />)} />
            <Route exact path="/layouts" render={() => (<Layouts />)} />

            <Route exact path="/components/avatar" render={() => (<Avatar />)} />
            <Route exact path="/components/buttons" render={() => (<Buttons />)} />
            <Route exact path="/components/cards" render={() => (<Cards />)} />
            <Route exact path="/components/dialog" render={() => (<Dialog />)} />

            <Route exact path="/play/overrides" render={() => (<Overrides />)} />
          </Switch>
        </BrowserRouter>
        
      </MuiThemeProvider>
    )
  }
}

export default App;