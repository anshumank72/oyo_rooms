import { makeStyles } from "@material-ui/styles";
import React from "react";
import City from "./City";
import data from "../../data.json";
const useStyles = makeStyles((theme) => ({
  citiesDiv: {
    backgroundColor: "#f3f5f7",
    width: "100%",
  },
}));

const cities = (props) => {
  const classes = useStyles();
  const cities = "Bangalore";
  return (
    <div className={classes.citiesDiv}>
      <div>
        <City city={city} key={index} />;
      </div>
    </div>
  );
};
export default cities;
