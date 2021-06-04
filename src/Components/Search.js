import React from "react";
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
    lineHeight: "1.5",
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
}));

const search = (props) => {
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
        <Grid item>
          <Typography>Thu,3 jun - Fri,4 jun</Typography>
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
        <Grid item>
          <Typography>1 Room, 1 Guest</Typography>
        </Grid>
        <Grid>
          <Button variant="contained">Search</Button>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <Typography>Continue your search</Typography>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography>Bangalore . 2 Guests</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default search;
