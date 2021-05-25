import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../assets/Logo.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  logo: {
    height: "7em";
  }
});

const navbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <img alt="company logo" src={Logo} className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};
export default navbar;
