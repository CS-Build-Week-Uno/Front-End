import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { moveAction } from "../../store/actions/playerAction";

const Controller = () => {
  const dispatch = useDispatch();

  // window.addEventListener('keydown', async (e) => {
  //     await handleKeyDown(e)
  // })

  // function handleKeyDown(e) {
  //     // Preventing page from scrolling up and down when you press the arrow keys
  //     e.preventDefault()

  //     // Switch case to handle movements based on arrow key
  //     switch(e.keyCode){

  //         // Left Arrow Key, returning the function to stop the switch case
  //         case 37:
  //            moveAction("w")
  //         // Up Arrow Key, returning the function to stop the switch case
  //         case 38:
  //             moveAction("n")
  //         // Right Arrow Key, returning the function to stop the switch case
  //         case 39:
  //            moveAction("e")
  //         // Down Arrow Key, returning the function to stop the switch case
  //         case 40:
  //             moveAction("s")
  //         //Otherwise console log what key you're pressing
  //         default:
  //             console.log(e.keyCode)
  //     }
  // }

  return (
    <div>
      <div className="CONTROLLER">CONTROLLER</div>
      <button onClick={() => dispatch(moveAction("n"))}>N</button>
      <button onClick={() => dispatch(moveAction("s"))}>S</button>
      <button onClick={() => dispatch(moveAction("e"))}>E</button>
      <button onClick={() => dispatch(moveAction("w"))}>W</button>
    </div>
  );
};

export default Controller;
