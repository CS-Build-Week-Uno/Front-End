import React from "react";
import GameView from "./GameView";
import Controller from "./Controller";
import Chat from "./Chat";
import ResponseBox from "./ResponseBox";

const Game = () => {
  return (
    <div>
      <GameView />
      <Controller />
      <Chat />
      <ResponseBox />
    </div>
  );
};

export default Game;
