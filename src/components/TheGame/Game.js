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
				className="gameWrapper"
				style={{
					position: "relative",
					width: "600px",
					height: "300px",
					margin: "2% auto",
					color:'green',
					
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
