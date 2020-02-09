import React from "react";
import Container from "@material-ui/core/Container";
import Image from "../content/background.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  сontainer: {
    // backgroundImage: `url(${Image})`
    backgroundColor: "red",
    color: "green"
  }
});

export default function MyContainer(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <h1>Header</h1> */}
      <Container>
        <div className={classes.container} style={{ color: "blue" }}>
          hallo
        </div>
        <div style={{ backgroundColor: "white", height: "100vh" }}>
          {props.children}
        </div>
      </Container>
      {/* <h1>Footer</h1> */}
    </React.Fragment>
  );
}
