import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    background: "linear-gradient(135deg, #d11450, #df293a)",
    width: "100%",
    padding: "10px 0 32px",
    marginBottom: "18px",
    fontFamily: "Open Sans,sans-serif",
  },
  searchHeading: {
    color: "#fff",
    fontSize: "1.8rem",
    fontFamily: "Open Sans,sans-serif",
    fontWeight: "800",
    lineHeight: "1.8",
    margin: "16px 0",
    letterSpacing: "0.5px",
  },
  searchCity: {
    backgroundColor: "white",
    width: "150%",
  },
  buttonSearch: {
    borderRadius: "15px",
    backgroundColor: "#f2f2f2",
    width: "80px",
    padding: "4px 6px",
    fontSize: "0.6rem",
  },
  inputContainer: {
    backgroundColor: "#fff",
    width: "74%",
    borderRadius: "5px",
    border: `1px solid grey`,
  },
  searchInput: {
    padding: `15px 12px`,
  },
  buttonSearchHotel: {
    backgroundColor: "#1ab64f",
    padding: "20px 50px",
    color: "white",
    fontWeight: "500",
    letterSpacing: "1px",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  card: {
    backgroundColor: "transparent",
    boxShadow: "none",
    height: "38px",
    width: "160px",
    border: "2px solid #fff",
    color: "#fff",
    textAlign: "center",
  },
}));

const search = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      className={classes.searchContainer}
    >
      <Grid item style={{ marginTop: "1em" }}>
        <Typography className={classes.searchHeading}>
          World's Fastest Growing Hotel Chain
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="space-between"
        alignItems="center"
        className={classes.inputContainer}
      >
        <Grid item lg={5}>
          <Grid
            container
            alignItems="center"
            justify="space-between"
            className={classes.searchInput}
          >
            <Grid item>
              <TextField
                className={classes.searchCity}
                id="search city"
                placeholder="Search by city, hotel, or neighborhood"
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<LocationSearchingIcon />}
                size="small"
                disableRipple
                disableElevation
                className={classes.buttonSearch}
              >
                near me
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={1}>
          <Divider
            style={{
              width: "2px",
              height: "62px",
              marginLeft: "-1em",
              color: "#ded8d7",
            }}
          />
        </Grid>
        <Grid item style={{ marginLeft: "-4em" }}>
          <form className={classes.container} noValidate>
            <TextField
              id="date-local"
              type="date-local"
              defaultValue={new Date(Date.now()).toLocaleString().split(",")[0]}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>
        <Grid item lg={1}>
          <Divider
            style={{
              width: "2px",
              height: "62px",
              marginLeft: "-5em",
              color: "#ded8d7",
            }}
          />
        </Grid>
        <Grid item style={{ marginLeft: "-9em" }}>
          <Typography>1 Room, 1 Guest</Typography>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            className={classes.buttonSearchHotel}
            size="large"
            disableRipple
            disableElevation
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        style={{ marginLeft: "-45em", marginTop: "2em" }}
      >
        <Grid item style={{ marginRight: "3em" }}>
          <Typography
            style={{
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "500",
              letterSpacing: "1px",
            }}
          >
            Continue your search
          </Typography>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardContent>
              <Typography style={{ fontSize: "13px", marginTop: "-5px" }}>
                Bangalore . 2 Guests
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default search;
