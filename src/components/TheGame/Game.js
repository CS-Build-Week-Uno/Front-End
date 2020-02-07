import React from "react";
import Controller from "./Controller";
import ActionLog from "./ActionLog";
import GameMap from "./map";
import ChatBox from "./ChatBox";
import Player from "./player";

import styled from "styled-components"

const MapContainer = styled.div`
width:640px;
height:640px:
display:grid;
grid-template-columns: repeat(10,64px);
grid-template-rows: repeat(10,64px);
grid-columns: 1/ 6;
grid-rows: 1/6;
background-color: black;
`

const Game = () => {
	return (
		<>
			{/* Wrapper containing Map & Char */}
			<MapContainer
				className="gameWrapper"
				style={{
					position: "relative",
					width: "640px",
					height: "640px",
					margin: "2% auto",
					color:'green',
					
				}}
			>
				<Player />
				<GameMap />
			</MapContainer>

			<div>
				<Controller />
				<ChatBox />
				<ResponseBox />
			</div>
		</>
	);

};

export default Game;
