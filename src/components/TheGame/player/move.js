import React from "react";
import store from "../../../store/reducers/index";
import { SIZE_OF_SPRITE } from "../../../store/constantValues";
import { move } from "../../../store/actions/playerAction";

export default function handleMove(player) {
  // Handles changing the position based on old position & shifting
  function getNewPosition(direction) {
    // Retrieving previous player position from state
    const oldPos = store.getState().player.position;

    // Creates new position movement based on the size of the char sprite its self
    // Size of the sprite is 30px, So when the character moves, It moves over by 30px
    switch (direction) {
      case "West":
        // Move to the left by 30px : We're subtracting 30px from the prev X axis
        return [oldPos[0] - SIZE_OF_SPRITE, oldPos[1]];
      case "East":
        // Move to the Right by 30px : We're adding 30px from the prev X axis
        return [oldPos[0] + SIZE_OF_SPRITE, oldPos[1]];
      case "North":
        // Move up by 30px : We're removing 30px from the prev Y axis
        return [oldPos[0], oldPos[1] - SIZE_OF_SPRITE];
      case "South":
        // Move down by 30px : We're adding 30px from the prev Y axis
        return [oldPos[0], oldPos[1] + SIZE_OF_SPRITE];
    }
  }

  function handleKeyDown(e) {
    // Preventing page from scrolling up and down when you press the arrow keys
    e.preventDefault();

    // Switch case to handle movements based on arrow key
    switch (e.keyCode) {
      // Left Arrow Key, returning the function to stop the switch case
      case 37:
        return move("West");
      // Up Arrow Key, returning the function to stop the switch case
      case 38:
        return move("North");
      // Right Arrow Key, returning the function to stop the switch case
      case 39:
        return move("East");
      // Down Arrow Key, returning the function to stop the switch case
      case 40:
        return move("South");
      //Otherwise console log what key you're pressing
      default:
        console.log(e.keyCode);
    }
  }

  // Listening to user key downstrokes
    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
        console.log("keydown", e)
    })

  return player;
}
