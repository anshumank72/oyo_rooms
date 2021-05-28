import React, { Component } from "react";
import Home from "./Container/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Components/theme";
import Cities from "./Components/Cities/Cities";
import data from "./data.json";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
        <Cities />
      </ThemeProvider>
    );
  }
}

export default App;
