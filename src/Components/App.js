import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from "../Theme";
import { setThemeColors, setThemeFonts } from "../Theme/helpers";

import Header from "./Common/Header";
import Home from "./Home";
import Components from "./MaterialUI";
import Play from "./Play";

import Links from "./Home/Links";

import Avatar from "./MaterialUI/Avatar";
import Badges from "./MaterialUI/Badges";
import Chip from "./MaterialUI/Chip";
import Table from "./MaterialUI/Table";

import Cards from "./MaterialUI/Cards";
import Accordian from "./MaterialUI/Accordian";

import Buttons from "./MaterialUI/Buttons";
import DateTime from "./MaterialUI/DateTime";
import Select from "./MaterialUI/Select";
import TextField from "./MaterialUI/TextField";
import TransferList from "./MaterialUI/TransferList";

import Transitions from "./MaterialUI/Transitions";
import MediaQuery from "./MaterialUI/MediaQuery";

import Dialog from "./MaterialUI/Dialog";
import Progress from "./MaterialUI/Progress";

import Overrides from "./Play/Overrides";

// AMS Play
import Ams from "./Ams";
import AmsMobileDataSources from "./Ams/Mobile/DataSources";
import AmsMobileHomeScreen from "./Ams/Mobile/HomeScreen";
import AmsMobileLivestream from "./Ams/Mobile/Livestream";
import AmsMobileMenu from "./Ams/Mobile/Menu";
import AmsOttGlobalConfig from "./Ams/Ott/GlobalConfig";
import AmsOttDataSources from "./Ams/Ott/DataSources";
import AmsOttMenu from "./Ams/Ott/Menu";

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

            <Route exact path="/ams" render={() => (<Ams />)} />
            <Route exact path="/ams/mobile/datasources" render={() => (<AmsMobileDataSources />)} />
            <Route exact path="/ams/mobile/homescreen" render={() => (<AmsMobileHomeScreen />)} />
            <Route exact path="/ams/mobile/livestream" render={() => (<AmsMobileLivestream />)} />
            <Route exact path="/ams/mobile/menu" render={() => (<AmsMobileMenu />)} />
            <Route exact path="/ams/ott/globalconfig" render={() => (<AmsOttGlobalConfig />)} />
            <Route exact path="/ams/ott/datasources" render={() => (<AmsOttDataSources />)} />
            <Route exact path="/ams/ott/menu" render={() => (<AmsOttMenu />)} />

            <Route exact path="/links" render={() => (<Links />)} />

            <Route exact path="/components/avatar" render={() => (<Avatar />)} />
            <Route exact path="/components/badges" render={() => (<Badges />)} />
            <Route exact path="/components/buttons" render={() => (<Buttons />)} />
            <Route exact path="/components/cards" render={() => (<Cards />)} />
            <Route exact path="/components/accordian" render={() => (<Accordian />)} />
            <Route exact path="/components/chip" render={() => (<Chip />)} />
            <Route exact path="/components/date-time" render={() => (<DateTime />)} />
            <Route exact path="/components/dialog" render={() => (<Dialog />)} />
            <Route exact path="/components/media-query" render={() => (<MediaQuery />)} />
            <Route exact path="/components/progress" render={() => (<Progress />)} />
            <Route exact path="/components/select" render={() => (<Select />)} />
            <Route exact path="/components/table" render={() => (<Table />)} />
            <Route exact path="/components/text-field" render={() => (<TextField />)} />
            <Route exact path="/components/transfer-list" render={() => (<TransferList />)} />
            <Route exact path="/components/transitions" render={() => (<Transitions />)} />

            <Route exact path="/play/overrides" render={() => (<Overrides />)} />
          </Switch>
        </BrowserRouter>
        
      </MuiThemeProvider>
    )
  }
}

export default App;