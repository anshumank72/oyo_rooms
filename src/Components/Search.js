import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
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
    fontWeight: "800",
    lineHeight: "1",
    margin: "16px 0",
    letterSpacing: "1px",
  },
}));

const search = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.searchContainer}
    >
      <Grid item>
        <Typography className={classes.searchHeading}>
          World's Fastest Growing Hotel Chain
        </Typography>
      </Grid>
      <Grid item container justify="center" alignItems="center">
        <Grid item>
          <Grid container>
            <Grid item>
              <TextField
                id="search city"
                placeholder="Search by city, hotel, or neighborhood"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <button variant="contained">
                <LocationSearchingIcon />
                <Typography>near me</Typography>
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>Thu,3 jun - Fri,4 jun</Typography>
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
