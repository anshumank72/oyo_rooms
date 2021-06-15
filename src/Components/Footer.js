import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#6d787d",
    color: "white",
  },
  firstRow: {
    padding: "24px 70px",
  },
  downloadLogo: {
    minWidth: "140px",
    maxWidth: "170px",
    height: "55px",
  },
  items: {
    marginRight: "1em",
  },
  eachItem: {
    margin: "6px 0",
    fontSize: "14px",
  },
  container: {
    margin: "0",
    padding: "30px 0",
    borderTop: "1px solid hsla(0,0%,100%,.5)",
    borderBottom: "1px solid hsla(0,0%,100%,.5)",
  },
}));

const footer = (props) => {
  const classes = useStyles();
  return (
    <footer>
      <Grid container className={classes.mainContainer} direction="column">
        <Grid item style={{ borderBottom: "1px solid hsla(0,0%,100%,.5)" }}>
          {/*------first row-----*/}
          <Grid
            container
            className={classes.firstRow}
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Grid container alignItems="center">
                <Grid item style={{ marginRight: "20px" }}>
                  <Typography
                    variat="h1"
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "900",
                      fontSize: "2rem",
                    }}
                  >
                    OYO
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    The World's Fastest Growing Hotel Chain
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item style={{ marginRight: "2em" }}>
                  <Typography variant="h5">
                    Join our network and grow your business!
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    alignItems="center"
                    style={{
                      backgroundColor: "#fff",
                      color: "#6d787d",
                      padding: "10px 15px",
                      borderRadius: "4px",
                    }}
                  >
                    <Grid
                      item
                      style={{
                        marginRight: "10px",
                      }}
                    >
                      <HomeWorkOutlinedIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{ fontSize: "14px", fontWeight: "500" }}
                      >
                        List your property
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*------second row-----*/}
          <Grid
            container
            justify="space-around"
            style={{ padding: "30px 80px" }}
          >
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="subtitle1">
                    Download OYO app for exciting offers.
                  </Typography>
                </Grid>
                <Grid container style={{ marginTop: "1em" }}>
                  <Grid item style={{ marginRight: "12px" }}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="ios"
                      className={classes.downloadLogo}
                    />
                  </Grid>
                  <Grid item>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="android"
                      className={classes.downloadLogo}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item className={classes.items}>
                  <Grid container direction="column">
                    <Grid item className={classes.eachItem}>
                      <Typography style={{ fontSize: "14px" }}>
                        About Us
                      </Typography>
                    </Grid>
                    <Grid item className={classes.eachItem}>
                      <Typography style={{ fontSize: "14px" }}>
                        Teams / careers
                      </Typography>
                    </Grid>
                    <Grid item className={classes.eachItem}>
                      <Typography style={{ fontSize: "14px" }}>
                        Blogs
                      </Typography>
                    </Grid>
                    <Grid item className={classes.eachItem}>
                      <Typography style={{ fontSize: "14px" }}>
                        Supports
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item className={classes.items}>
                  <Grid container direction="column">
                    <Grid item className={classes.eachItem}>
                      <Typography style={{ fontSize: "14px" }}>
                        Official OYO Blogs
                      </Typography>
                    </Grid>
                    <Grid item className={classes.eachItem}>
                      <Typography style={{ fontSize: "14px" }}>
                        Press Kit
                      </Typography>
                    </Grid>
                    <Grid item className={classes.eachItem}>
                      <Typography style={{ fontSize: "14px" }}>
                        Oyo Circles
                      </Typography>
                    </Grid>
                    <Grid item className={classes.eachItem}>
                      <Typography style={{ fontSize: "14px" }}>
                        Oyo Frames
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item className={classes.items}>
                  <Grid container direction="column">
                    <Grid item className={classes.eachItem}>
                      <Typography style={{ fontSize: "14px" }}>
                        Terms and <br /> Conditions
                      </Typography>
                    </Grid>
                    <Grid item className={classes.eachItem}>
                      <Typography style={{ fontSize: "14px" }}>
                        Guests Policies
                      </Typography>
                    </Grid>
                    <Grid className={classes.eachItem}>
                      <Typography style={{ fontSize: "14px" }}>
                        Privacy Policy
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item className={classes.items}>
                  <Grid container>
                    <Grid item className={classes.eachItem}>
                      <Typography style={{ fontSize: "14px" }}>
                        Responsible
                        <br /> Disclosure
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*------third row-----*/}
          <Grid container className={classes.container} justify="space-evenly">
            <Grid item>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "10px",
                      letterSpacing: "1px",
                    }}
                  >
                    OYO Townhouse
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                    }}
                  >
                    Yours Friendly Neighbourhood Hotels
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "10px",
                      letterSpacing: "1px",
                    }}
                  >
                    OYO SilverKeys
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                    }}
                  >
                    Executive stays
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "10px",
                      letterSpacing: "1px",
                    }}
                  >
                    OYO HOME
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                    }}
                  >
                    Unlocking homes
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*------fourth row-----*/}
          <Grid container>
            <Grid item>
              <Grid
                container
                direction="column"
                style={{ padding: "32px 0", margin: "0 80px" }}
              >
                <Grid item style={{ marginLeft: "4.9em" }}>
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      letterSpacing: ".6px",
                      marginBottom: "10px",
                    }}
                  >
                    OYO Hotels
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container justify="center">
                    <Grid item style={{ marginRight: "4.5em" }}>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels near me
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Manali
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Nainital
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Mount Abu
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Agra
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Haridwar
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Gurgaon
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Coimbatore
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            OYO Hotels UK
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item style={{ marginRight: "4.5em" }}>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Goa
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Udaipur
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Lonavala
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Kodaikanal
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Gangtok
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Kolkata
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Mandarmoni
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Kasauli
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            OYO Hotels USA
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item style={{ marginRight: "4.5em" }}>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Puri
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Masuri
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Munnar
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Hyderabad
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Coorg
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Ahmedabad
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Daman
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Dehradun
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            OYO Hotels Mexico
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item style={{ marginRight: "4.5em" }}>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Mahableshwar
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Pondicherry
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Bangalore
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Pune
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Chennai
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Shilong
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Yercaud
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Guide
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            OYO Hotels Brasil
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item style={{ marginRight: "4.5em" }}>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Jaipur
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Delhi
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Mysore
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Chandigarh
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Tirupati
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Rishikesh
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Amritsar
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            All cities Hotels
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            OYO Hotels China
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Shimla
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Mumbai
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Darjeeling
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Sirdi
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Dalhausi
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Varanasi
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Hotels in Madurai
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            Coupons
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.eachItem}>
                            OYO Hotels Indonesia
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};
export default footer;
