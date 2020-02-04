import React from "react";
import Controller from "./Controller";
import ResponseBox from "./ResponseBox";
import GameMap from "./GameMap";
import ChatBox from "./ChatBox";

const Game = () => {
  return (
    <div>
      <GameMap />
      <Controller />
      <ChatBox />
      <ResponseBox />
    </div>
  );
};

export default Game;
