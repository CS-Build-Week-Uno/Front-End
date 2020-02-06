import React from "react";
import store from "../../../store/reducers/index";
import { SIZE_OF_SPRITE } from "../../../store/constantValues";
import { moveAction } from "../../../store/actions/playerAction";

// export default function handleMove(player) {
//   // Handles changing the position based on old position & shifting
//   function getNewPosition(direction) {
//     // Retrieving previous player position from state
//     const oldPos = store.getState().player.position;

//     // Creates new position movement based on the size of the char sprite its self
//     // Size of the sprite is 30px, So when the character moves, It moves over by 30px
//     switch (direction) {
//       case "w":
//         // Move to the left by 30px : We're subtracting 30px from the prev X axis
//         return [oldPos[0] - SIZE_OF_SPRITE, oldPos[1]];
//       case "e":
//         // Move to the Right by 30px : We're adding 30px from the prev X axis
//         return [oldPos[0] + SIZE_OF_SPRITE, oldPos[1]];
//       case "n":
//         // Move up by 30px : We're removing 30px from the prev Y axis
//         return [oldPos[0], oldPos[1] - SIZE_OF_SPRITE];
//       case "s":
//         // Move down by 30px : We're adding 30px from the prev Y axis
//         return [oldPos[0], oldPos[1] + SIZE_OF_SPRITE];
//     }
//   }
//   return player;
// }
// Listening to user key downstrokes
window.addEventListener("keydown", e => {
  if (
    e.keyCode == 37 ||
    e.keyCode == 38 ||
    e.keyCode == 39 ||
    e.keyCode == 40
  ) {
    handleKeyDown(e);
  } else {
    return;
  }
});

export default function handleKeyDown(e) {
  console.log("HandleKeyDownPress");
  // Preventing page from scrolling up and down when you press the arrow keys
  e.preventDefault();

  // Switch case to handle movements based on arrow key
  switch (e.keyCode) {
    // Left Arrow Key, returning the function to stop the switch case
    case 37:
      return moveAction("w");
    // Up Arrow Key, returning the function to stop the switch case
    case 38:
      return moveAction("n");
    // Right Arrow Key, returning the function to stop the switch case
    case 39:
      return moveAction("e");
    // Down Arrow Key, returning the function to stop the switch case
    case 40:
      return moveAction("s");
    //Otherwise console log what key you're pressing
    default:
      console.log(e.keyCode);
  }
}
