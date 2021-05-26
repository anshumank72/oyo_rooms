import React, { Component } from "react";
import Home from "./Container/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Components/theme";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
