import React from "react";
import Controller from "./Controller";
import ActionLog from "./ActionLog";
import GameMap from "./map";
import ChatBox from "./ChatBox";
import Player from "./player";

import styled from "styled-components";

import {tiles} from "../../data/maps/1";
import {connect} from 'react-redux';

const MapContainer = styled.div`
width:640px;
height:640px:
display:grid;
grid-template-columns: repeat(10,64px);
grid-template-rows: repeat(10,64px);
grid-columns: 1/ 6;
grid-rows: 1/6;
`


const Game = (props) => {
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
					
				}}
			>
				<Player />
				<GameMap tiles ={tiles} playerPosition={props.playerPosition}/>
			</MapContainer>

			<div>
				<Controller />
				<ChatBox />
				{/* <ResponseBox /> */}
			</div>
		</>
	);

};

const mapStateToProps = (state) => ({
	...state.player
})

export default Game;
