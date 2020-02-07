import React from "react";
import Controller from "./Controller";
import ActionLog from "./ActionLog";
import GameMap from "./map";
import ChatBox from "./ChatBox";
import Player from "./player";

const Game = () => {
  return (
    <>
      {/* Wrapper containing Map & Char */}
      <div
        style={{
          position: "relative",
          width: "800px",
          height: "400px",
          margin: "2% auto"
        }}
      >
        <Player />
        <GameMap />
        <Controller />
      </div>
    </>
  );
};

export default Game;
