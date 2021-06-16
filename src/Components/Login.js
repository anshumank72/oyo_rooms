import { Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundImage:
      "url(https://assets.oyoroomscdn.com/cmsMedia/b3c9905c-31d1-4349-8594-c07deae6b36d.jpg)",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  },
  oyoIcon: {
    fontSize: "2.7rem",
    fontWeight: "900",
    fontFamily: "Roboto",
    color: "#fff",
  },
}));

const login = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer} direction="column">
      <Grid item>
        <Grid container alignItems="center" style={{ padding: "30px 80px" }}>
          <Grid item style={{ marginRight: "20px" }}>
            <Typography variant="h3" className={classes.oyoIcon}>
              OYO
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{ color: "#fff", fontWeight: "500", letterSpacing: "1px" }}
            >
              Hotels and homes across 800 cities, 24+ countries
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography>
                  There’s a smarter way <br />
                  to OYO around
                </Typography>
              </Grid>
              <Grid item>
                Sign up with your phone number and get exclusive access to
                discounts and <br /> savings on OYO stays and with our many
                travel partners.
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Card>
              <Grid container direction="column">
                <Grid item></Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default login;
