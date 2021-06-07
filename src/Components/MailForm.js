import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    border: "1px solid #e0dcdc",
    width: "91%",
    margin: "37px 0",
    marginLeft: "73px",
    padding: "12px 20px",
    borderRadius: "4px",
  },
  button: {
    marginLeft: "1em",
    padding: "16px 35px",
    marginTop: "5px",
    backgroundColor: "#df293a",
    borderRadius: "5px",
    textTransform: "none",
    color: "#fff",
  },
}));

const mailform = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      className={classes.container}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography
              variant="h6"
              style={{
                fontWeight: "800",
                fontSize: "1.5rem",
                lineHeight: "1.4",
              }}
            >
              Get access to executive deals
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              style={{ color: "gray", fontSize: "1.2rem", fontWeight: "200" }}
            >
              Only the best deals reach your inbox
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item>
            <TextField
              id="outlined-full-width"
              label="Your email"
              placeholder="e.g., john@email.com"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              style={{ marginLeft: "-3em" }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className={classes.button}
              disableRipple
              disableElevation
            >
              Notify me
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default mailform;
