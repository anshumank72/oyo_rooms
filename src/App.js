import React, { Component } from "react";
import Home from "./Container/Home";
import { ThemeProvider } from "@material-ui/core/styles";
class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
