import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../Theme";
import Header from "./Content/Header"
import Well from "./Content/Well";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Well />
      </ThemeProvider>
    )
  }
}

export default App;