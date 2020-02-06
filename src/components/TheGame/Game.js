import React from "react";
import Controller from "./Controller";
import ResponseBox from "./ResponseBox";
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
			</div>

			<div>
				<Controller />
				<ChatBox />
				<ResponseBox />
			</div>
		</>
	);
};

export default Game;
