import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../Theme";
import Header from "./Header"
import CardFunctional from "./CardFunctional";
import CardClass from "./CardClass";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <CardFunctional />
        <CardClass />
      </ThemeProvider>
    )
  }
}

export default App;