import { Card, CardMedia, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100vw",
    textAlign: "center",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  image: {
    width: "90%",
    height: "100%",
    margin: "0 20px",
    borderRadius: "4px",
  },
}));

const advertisingBanner = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item style={{ marginTop: "37px" }}>
        <Card className={classes.card}>
          <CardMedia>
            <img
              src="https://assets.oyoroomscdn.com/cmsMedia/7700e1f2-3d24-41e8-8c71-f4336c625a88.jpg"
              alt="advertising photo"
              className={classes.image}
            />
          </CardMedia>
        </Card>
      </Grid>
      <Grid item style={{ marginTop: "37px" }}>
        <Card className={classes.card}>
          <CardMedia>
            <img
              src="https://assets.oyoroomscdn.com/cmsMedia/b8bad7f9-d052-40c8-8521-bbb4937c5acc.jpg"
              alt="advertising photo"
              className={classes.image}
            />
          </CardMedia>
        </Card>
      </Grid>
    </Grid>
  );
};
export default advertisingBanner;
