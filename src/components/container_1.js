import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <Container>
        <div style={{ backgroundColor: "white", height: "100vh" }}>
          {props.myContent}
        </div>
      </Container>
    </React.Fragment>
  );
}
