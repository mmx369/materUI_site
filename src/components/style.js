import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background:
    border: 10,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "10 30px"
  }
});

export default function Hook(props) {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
}
