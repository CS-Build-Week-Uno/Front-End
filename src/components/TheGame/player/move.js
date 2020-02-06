import store from "../../../store/reducers/index"
import { SIZE_OF_SPRITE, HEIGHT_OF_MAP, WIDTH_OF_MAP } from '../../../store/constantValues'

export default function handleMove(player) {

    // Handles changing the position based on old position & shifting
    function getNewPosition(direction){
        // Retrieving previous player position from state
        const oldPos = store.getState().player.position

        // Creates new position movement based on the size of the char sprite its self
        // Size of the sprite is 30px, So when the character moves, It moves over by 30px
        switch(direction) {
            case 'West':
                // Move to the left by 30px : We're subtracting 30px from the prev X axis
                return [ oldPos[0]-SIZE_OF_SPRITE, oldPos[1] ]
            case 'East':
                // Move to the Right by 30px : We're adding 30px from the prev X axis
                return [ oldPos[0]+SIZE_OF_SPRITE, oldPos[1] ]
            case 'North':
                // Move up by 30px : We're removing 30px from the prev Y axis
                return [ oldPos[0], oldPos[1] -SIZE_OF_SPRITE ]
            case 'South':
                // Move down by 30px : We're adding 30px from the prev Y axis
                return [ oldPos[0], oldPos[1] +SIZE_OF_SPRITE ]
        }
        
    }
    
    
        function observeBoundaries(oldPos, newPos) {
            
            return (newPos[0] >= 0 && newPos <= WIDTH_OF_MAP) && (newPos[1] >= 0 && newPos[1 <= HEIGHT_OF_MAP]) ? newPos : oldPos
            }
        }
        // Handles the Dispatch for Move, This could be refactored into Actions
        function dispatchMove(direction){
            const oldPos = store.getState().player.position

            store.dispatch({
            // Calls Dispatch Type MOVE_PLAYER
            type:'MOVE_PLAYER',
            // Uploads the Player Positiong in PlayerRepository with the direction from getNewPosition
            payload: {
                position: getNewPosition(direction)
            }
        })
    }
    
    function handleKeyDown(e) {
        // Preventing page from scrolling up and down when you press the arrow keys
        e.preventDefault()

        // Switch case to handle movements based on arrow key
        switch(e.keyCode){

            // Left Arrow Key, returning the function to stop the switch case
            case 37:
                return dispatchMove('West')
            // Up Arrow Key, returning the function to stop the switch case
            case 38:
                return dispatchMove("North")
            // Right Arrow Key, returning the function to stop the switch case
            case 39:
                return dispatchMove("East")
            // Down Arrow Key, returning the function to stop the switch case
            case 40:
                return dispatchMove("South")
            //Otherwise console log what key you're pressing 
            default:
                console.log(e.keyCode)
        }
    }


    // const gamer = document.getElementsByClassName('gameWrapper')
    // Listening to user key downstrokes
    
    // 
    // document.querySelector(".gameWrapper").addEventListener('keydown', (e) => {
    //     handleKeyDown(e)
    // })

  
    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    //     if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40  ){
    //     handleKeyDown(e)}
    // })

    return player
}