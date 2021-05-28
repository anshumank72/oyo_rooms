import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
const useStyles = makeStyles((theme) => ({
  city: {
    display: "flex",
    alignItems: "center",
  },
}));

const city = ({ city }) => {
  const classes = useStyles();
  const [show, setShow] = useState(true);

  return (
    <div className={classes.city}>
      <Typography>{city}</Typography>
      <ExpandMoreSharpIcon />
    </div>
  );
};
export default city;
