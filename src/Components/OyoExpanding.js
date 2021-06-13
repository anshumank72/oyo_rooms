import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

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
    position: "relative",
    margin: "0 60px 0 20px",
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
  separator: {
    fontSize: "70px",
    fontWeight: "100",
    padding: "0 8px",
  },
  iconroot: {
    minWidth: "2em",
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
              style={{}}
            />
          </div>
          <div className={classes.oyoCellColumn}>
            <Typography
              variant="h3"
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                color: "#333",
                fontFamily: "Open Sans,sans-serif",
                padding: "20px 0",
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
                padding: "20px 0",
              }}
            >
              More Destination. More Ease. More Affordable
            </Typography>
            <div className={classes.oyoCount}>
              <Breadcrumbs
                aria-label="breadcrumb"
                classes={{ root: classes.root, separator: classes.separator }}
              >
                <div>
                  <Typography
                    variant="h4"
                    style={{ fontWeight: 500, color: "#333" }}
                  >
                    80
                  </Typography>
                  <Typography variant="subtitle1" style={{ fontWeight: 100 }}>
                    Countries
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="h4"
                    style={{ fontWeight: 500, color: "#333" }}
                  >
                    4300+
                  </Typography>
                  <Typography variant="subtitle1" style={{ fontWeight: 100 }}>
                    Hotels
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="h4"
                    style={{ fontWeight: 500, color: "#333" }}
                  >
                    150,000
                  </Typography>
                  <Typography variant="subtitle1" style={{ fontWeight: 100 }}>
                    Vacation homes
                  </Typography>
                </div>
              </Breadcrumbs>
            </div>
            <List
              component="ul"
              aria-label="main countries folders"
              style={{ marginLeft: "-14px" }}
            >
              <div style={{ display: "flex" }}>
                <ListItem>
                  <ListItemIcon classes={{ root: classes.iconroot }}>
                    <FiberManualRecordIcon
                      style={{ color: "rgb(26, 182, 79)", fontSize: "14px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="India" />
                </ListItem>
                <ListItem>
                  <ListItemIcon classes={{ root: classes.iconroot }}>
                    <FiberManualRecordIcon
                      style={{ color: "rgb(255, 127, 123)", fontSize: "14px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="China" />
                </ListItem>
                <ListItem>
                  <ListItemIcon classes={{ root: classes.iconroot }}>
                    <FiberManualRecordIcon
                      style={{ color: "rgb(245, 166, 35)", fontSize: "14px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Malaysia" />
                </ListItem>
              </div>
              <div style={{ display: "flex" }}>
                <ListItem>
                  <ListItemIcon classes={{ root: classes.iconroot }}>
                    <FiberManualRecordIcon
                      style={{ color: "rgb(95, 214, 242)", fontSize: "14px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Nepal" />
                </ListItem>
                <ListItem>
                  <ListItemIcon classes={{ root: classes.iconroot }}>
                    <FiberManualRecordIcon
                      style={{ color: "rgb(254, 148, 241)", fontSize: "14px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Indonesia" />
                </ListItem>
                <ListItem>
                  <ListItemIcon classes={{ root: classes.iconroot }}>
                    <FiberManualRecordIcon
                      style={{ color: "rgb(126, 137, 228)", fontSize: "14px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="UAE" />
                </ListItem>
              </div>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};
export default oyoExpanding;
