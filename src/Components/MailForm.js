import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";

const mailform = (props) => {
  return (
    <Grid container justify="center">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h6">Get access to executive deals</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              Only the best deals reach your inbox
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
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
            />
          </Grid>
          <Grid item>
            <Button variant="contained">Notify me</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default mailform;
