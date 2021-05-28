import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../assets/Logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },

  appbar: {
    borderBottom: "1px solid transparent",
    boxShadow: "none",
    fontFamily: "Open Sans,sans-serif",
    backgroundColor: "",
    padding: "0.2em 0",
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
  button: {
    fontSize: ".9em",
    fontWeight: "700",
    letterSpacing: "0",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  login: {
    display: "flex",
    alignItems: "center",
    marginRight: "1em",
  },
}));

const navbar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <React.Fragment>
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
              <Typography
                variant="caption"
                style={{ color: "rgba(0,0,0,.58)" }}
              >
                Addition 10% off on stays
              </Typography>
            </div>
          </Card>
          <Divider
            orientation="vertical"
            style={{
              margin: "0 1em",
              height: "3.8em",
              width: "1px",
              color: "rgba(0,0,0,.64)",
            }}
          />
          <div className={classes.language}>
            <LanguageIcon
              fontSize="large"
              color="secondary"
              className={classes.icon}
            />
            <Button
              disableRipple
              className={classes.button}
              color="secondary"
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup={anchorEl ? "true" : undefined}
              onClick={(event) => handleClick(event)}
            >
              English
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClose={handleClose}>English</MenuItem>
              <MenuItem onClose={handleClose}>Veitnamese</MenuItem>
              <MenuItem onClose={handleClose}>Arabic</MenuItem>
              <MenuItem onClose={handleClose}>Portugese</MenuItem>
              <MenuItem onClose={handleClose}>Spanish</MenuItem>
              <MenuItem onClose={handleClose}>Bahasa</MenuItem>
              <MenuItem onClose={handleClose}>Japanese</MenuItem>
            </Menu>
          </div>
          <Divider
            orientation="vertical"
            style={{
              margin: "0 1em",
              height: "3.8em",
              width: "1px",
              color: "rgba(0,0,0,.64)",
            }}
          />
          <div className={classes.login}>
            <AccountCircleRoundedIcon fontSize="large" color="secondary" />
            <Typography style={{ marginLeft: "3px" }}>
              Login / Signup
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};
export default navbar;
