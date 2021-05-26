import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../assets/Logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Divider, Typography } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  appbar: {
    borderBottom: "1px solid transparent",
    boxShadow: "none",
    fontFamily: "Open Sans,sans-serif",
    backgroundColor: "",
    padding: "0.5em 0",
  },
  logo: {
    height: "4em",
    marginLeft: "45px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
  },
  imagediv: {
    background: "#000",
    margin: "6px",
    padding: "5px 15px",
    borderRadius: "3px",
  },
  imagetext: {
    fontSize: "1.3em",
    fontWeight: "500",
    color: "#f5dd42",
  },
  textdiv: {
    margin: "2px 5px",
  },
  language: {
    display: "flex",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const navbar = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    language: "",
    name: "English",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <img alt="company logo" className={classes.logo} src={Logo} />
        <Card className={classes.card}>
          <div className={classes.imagediv}>
            <Typography className={classes.imagetext}>W</Typography>
          </div>

          <div className={classes.textdiv}>
            <Typography color="secondary" variant="subtitle2">
              Become a Member
            </Typography>
            <Typography variant="caption" style={{ color: "rgba(0,0,0,.58)" }}>
              Addition 10% off on stays
            </Typography>
          </div>
        </Card>
        <Divider
          orientation="vertical"
          style={{
            margin: "0 1em",
            height: "4em",
            width: "1px",
            color: "rgba(0,0,0,.64)",
          }}
        />
        <div className={classes.language}>
          <LanguageIcon fontSize="large" color="secondary" />
          <FormControl className={classes.formControl}>
            <NativeSelect
              variant="outlined"
              inputProps={{
                name: "name",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default navbar;
