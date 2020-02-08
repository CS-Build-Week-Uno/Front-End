import React, { useEffect } from "react";
import { moveAction } from "../../../store/actions/playerAction";
import { useDispatch } from "react-redux";
import store from "../../../store/reducers/index";

import {tiles} from "../../../data/maps/1/index" 

import {
	SIZE_OF_SPRITE,
	HEIGHT_OF_MAP,
	WIDTH_OF_MAP
} from "../../../store/constantValues";

function HandleMove(player) {
	// Handles changing the position based on old position & shifting
	
	const position = store.getState().player.position
	console.log(position)

	
	
	
	function getNewPosition(direction) {
		// Retrieving previous player position from state
		const position = store.getState().player.position
		
		const player_horizontal = position[0]/64
		const player_vertical = position[1]/64
		const getTile = (vert, horz) => tiles[vert][horz];
		console.log("touple", tiles[player_vertical][player_horizontal])
		console.log("h: ", player_horizontal, "v: ", player_vertical)


		// Creates new position movement based on the size of the char sprite its self
		// Size of the sprite is 30px, So when the character moves, It moves over by 30px
		switch (direction) {
			case "West":
				// Move to the left by 30px : We're subtracting 30px from the prev X axis
				if(tiles[player_vertical][player_horizontal].includes("w"))
					return [position[0] - SIZE_OF_SPRITE, position[1]] 	
				else
					return [position[0], position[1]] 	
			case "East":
				// Move to the Right by 30px : We're adding 30px from the prev X axis
				if(tiles[player_vertical][player_horizontal].includes("e"))
					return [position[0] + SIZE_OF_SPRITE, position[1]];	
				else
					return [position[0], position[1]] 	
			case "North":
				// Move up by 30px : We're removing 30px from the prev Y axis
				if(tiles[player_vertical][player_horizontal].includes("n"))
					return [position[0], position[1] - SIZE_OF_SPRITE];	
				else
					return [position[0], position[1]] 	
			case "South":
				// Move down by 30px : We're adding 30px from the prev Y axis
				if(tiles[player_vertical][player_horizontal].includes("s"))
					return [position[0], position[1] + SIZE_OF_SPRITE];
				else
					return [position[0], position[1]]
		}
    }
    
    
    function observeBoundaries(position, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= WIDTH_OF_MAP - SIZE_OF_SPRITE) && 
        (newPos[1] >= 0 && newPos[1] <= HEIGHT_OF_MAP - SIZE_OF_SPRITE) ? newPos : position
	}
	
	// function observeWalls(){
	// 	return (

	// 	)
	// }
    


	// Handles the Dispatch for Move, This could be refactored into Actions
	function dispatchMove(direction) {
		const position = store.getState().player.position;
		store.dispatch({
			// Calls Dispatch Type MOVE_PLAYER
			type: "MOVE_PLAYER",
			// Uploads the Player Positiong in PlayerRepository with the direction from getNewPosition
			payload: {
				position: observeBoundaries(position,getNewPosition(direction))
			}
		});
	}

	function handleKeyDown(e) {
		// Preventing page from scrolling up and down when you press the arrow keys
		e.preventDefault();

		// Switch case to handle movements based on arrow key
		switch (e.keyCode) {
			// Left Arrow Key, returning the function to stop the switch case
			case 37:
				return dispatchMove("West");
			// Up Arrow Key, returning the function to stop the switch case
			case 38:
				return dispatchMove("North");
			// Right Arrow Key, returning the function to stop the switch case
			case 39:
				return dispatchMove("East");
			// Down Arrow Key, returning the function to stop the switch case
			case 40:
				return dispatchMove("South");
			//Otherwise console log what key you're pressing
			default:
				return
		}
	}

	// Listening to user key downstrokes

	window.addEventListener("keydown", e => {
		handleKeyDown(e);
	});

	return player;
}

export default HandleMove;