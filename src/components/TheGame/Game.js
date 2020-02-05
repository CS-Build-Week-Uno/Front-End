import React from "react";
import Controller from "./Controller";
import ResponseBox from "./ResponseBox";
import GameMap from "./map";
import ChatBox from "./ChatBox";
import Player from "./player"

const Game = () => {
  return (
    <div
      style={{
        position:'relative',
        width:'800px',
        height:'400px',
        margin:'2% auto',
      }}
    >
      <Player />
      <GameMap />

      
      <Controller />
      <ChatBox />
      <ResponseBox />
    </div>
  );
};

export default Game;
