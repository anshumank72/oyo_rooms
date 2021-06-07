import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "40px 0",
    maxHeight: "800px",
    backgroundColor: "#f3f5f7",
  },
  mapSection: {
    maxHeight: "408px",
    maxWidth: "710px",
    backgroundImage:
      "url('https://assets.oyoroomscdn.com/cmsMedia/432737_widgetImage.jpg')",
    opacity: "1",
  },
  mapBox: {
    position: "relative",
    paddingRight: "40px",
    margin: "0 auto",
  },
}));

const oyoExpanding = (props) => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#f3f5f7" }}>
      <Grid container className={classes.container} justify="space-around">
        <Grid item className={classes.mapSection} lg={6}>
          <Grid container className={classes.mapBox}>
            <Grid item>
              <img
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_6.jpg"
                alt="UAE"
                style={{
                  height: "130px",
                  width: "110px",
                  position: "absolute",
                  top: "64px",
                  left: "131px",
                }}
              />
            </Grid>
            <Grid item>
              <img
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_4.jpg"
                alt="NEPAL"
                style={{
                  height: "130px",
                  width: "110px",
                  position: "absolute",
                  top: "35px",
                  left: "310px",
                }}
              />
            </Grid>
            <Grid item>
              <img
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_1.jpg"
                alt="INDIA"
                style={{
                  height: "130px",
                  width: "110px",
                  position: "absolute",
                  top: "175px",
                  left: "275px",
                }}
              />
            </Grid>
            <Grid item>
              <img
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_2.jpg"
                alt="CHINA"
                style={{
                  height: "130px",
                  width: "110px",
                  position: "absolute",
                  top: "11px",
                  left: "450px",
                }}
              />
            </Grid>
            <Grid item>
              <img
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_3.jpg"
                alt="MALAYSIA"
                style={{
                  height: "110px",
                  width: "130px",
                  position: "absolute",
                  top: "155px",
                  left: "430px",
                }}
              />
            </Grid>
            <Grid item>
              <img
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_5.jpg"
                alt="INDONSIA"
                style={{
                  height: "130px",
                  width: "110px",
                  position: "absolute",
                  top: "261px",
                  left: "377px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          txt
        </Grid>
      </Grid>
    </div>
  );
};
export default oyoExpanding;
