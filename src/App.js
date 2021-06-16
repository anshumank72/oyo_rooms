import React, { Component } from "react";
import Home from "./Container/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Components/theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
