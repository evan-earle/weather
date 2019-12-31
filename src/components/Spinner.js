import React from "react";

const style = {
  backgroundColor: "#404040",
  color: "white",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const Spinner = props => {
  return <div style={style}>{props.message}</div>;
};

export default Spinner;
