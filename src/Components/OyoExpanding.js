import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const useStyles = makeStyles((theme) => ({
  fadIncontainer: {
    opacity: "1",
  },
  oyoRow: {
    backgroundColor: "#f3f5f7",
    padding: "40px 0",
    display: "flex",
    alignItems: "stretch",
    flexFlow: "row-wrap",
    margin: "0 auto",
  },
  oyoCell: {
    margin: "0 auto",
    position: "relative",
    paddingRight: "40px",
    maxWidth: "720px",
    maxHeight: "408px",
    boxSizing: "border-box",
    width: "100%",
  },
  oyoCellColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
  },
}));

const oyoExpanding = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.fadIncontainer}>
        <div className={classes.oyoRow}>
          <div className={classes.oyoCell}>
            <div
              style={{
                height: "130px",
                width: "110px",
                position: "absolute",
                top: "64px",
                left: "131px",
                backgroundColor: "transparent",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <img
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_6.jpg"
                alt="UAE"
                style={{
                  width: "100%",
                  height: "100%",
                  verticalAlign: "middle",
                }}
              />
            </div>
            <div
              style={{
                height: "130px",
                width: "110px",
                position: "absolute",
                top: "35px",
                left: "310px",
                backgroundColor: "transparent",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <img
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_4.jpg"
                alt="NEPAL"
                style={{
                  width: "100%",
                  height: "100%",
                  verticalAlign: "middle",
                }}
              />
            </div>
            <div
              style={{
                height: "130px",
                width: "110px",
                position: "absolute",
                top: "175px",
                left: "275px",
                backgroundColor: "transparent",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <img
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_1.jpg"
                alt="INDIA"
                style={{
                  width: "100%",
                  height: "100%",
                  verticalAlign: "middle",
                }}
              />
            </div>
            <div
              style={{
                height: "130px",
                width: "110px",
                position: "absolute",
                top: "11px",
                left: "450px",
                backgroundColor: "transparent",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <img
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_2.jpg"
                alt="CHINA"
                style={{
                  width: "100%",
                  height: "100%",
                  verticalAlign: "middle",
                }}
              />
            </div>
            <div
              style={{
                height: "110px",
                width: "130px",
                position: "absolute",
                top: "155px",
                left: "430px",
                backgroundColor: "transparent",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <img
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_3.jpg"
                alt="MALAYSIA"
                style={{
                  width: "100%",
                  height: "100%",
                  verticalAlign: "middle",
                }}
              />
            </div>
            <div
              style={{
                height: "130px",
                width: "110px",
                position: "absolute",
                top: "261px",
                left: "377px",
                backgroundColor: "transparent",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <img
                src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_5.jpg"
                alt="INDONSIA"
                style={{
                  width: "100%",
                  height: "100%",
                  verticalAlign: "middle",
                }}
              />
            </div>
            <img
              src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetImage.jpg"
              alt="map photo"
            />
          </div>
          <div className={classes.oyoCellColumn}>
            <Typography
              variant="h3"
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                color: "#333",
                fontFamily: "Open Sans,sans-serif",
              }}
            >
              World's leading chain of hotels and homes
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "rgba(0,0,0,.7)",
                lineHeight: 1.5,
                width: "80%",
                marginTop: "0",
                fontWeight: "200",
                fontFamily: "Open Sans,sans-serif",
              }}
            >
              More Destination. More Ease. More Affordable
            </Typography>
            <div className={classes.oyoCount}>
              <Breadcrumbs aria-label="breadcrumb">
                <div>
                  <Typography variant="h4">80</Typography>
                  <Typography variant="subtitle1">Countries</Typography>
                </div>
                <div>
                  <Typography variant="h4">4300+</Typography>
                  <Typography variant="subtitle1">Hotels</Typography>
                </div>
                <div>
                  <Typography variant="h4">150,000</Typography>
                  <Typography variant="subtitle1">Vacation homes</Typography>
                </div>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default oyoExpanding;
/*<Grid container className={classes.container} justify="space-around">
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
      */
