import React from "react";
import CardFunctional from "./CardFunctional";
import CardClass from "./CardClass";

class App extends React.Component {
  render() {
    return (
      <>
        <CardFunctional />
        <CardClass />
      </>
    )
  }
}

export default App;