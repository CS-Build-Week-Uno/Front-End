import React, { Component } from "react";
import bounceSprite from "./bounceSprite.png";
import { connect } from "react-redux";
import handleMove from "./move";
import handleKeyDown from "./move";

function Player(props) {
  console.log("PROPS!!: ", props);
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url(${bounceSprite})`,
        backgroundPosition: "0 0",
        width: "30px",
        height: "30px"
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    // Spreading in all state for player, cause I'm lazy.
    ...state.player
  };
}

export default connect(mapStateToProps, { handleKeyDown })(Player);
