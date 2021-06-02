import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    background: "linear-gradient(135deg, #d11450, #df293a)",
    width: "100%",
    padding: "10px 0 32px",
    marginBottom: "18px",
    fontFamily: "Open Sans,sans-serif",
  },
  searchContainerWrapper: {
    width: "74%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  searchHeading: {
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "800",
    lineHeight: "1.5",
    margin: "16px 0",
    letterSpacing: "1px",
  },
}));

const search = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchContainerWrapper}>
        <div>
          <Typography variant="h1" className={classes.searchHeading}>
            World's Fastest Growing Hotel Chain
          </Typography>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default search;
