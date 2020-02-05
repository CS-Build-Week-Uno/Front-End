import store from "../../../store/reducers/index"
import { SIZE_OF_SPRITE } from '../../../store/constantValues'

export default function handleMove(player) {

    
    function getNewPosition(direction){
        const oldPos = store.getState().player.position

        switch(direction) {
            case 'West':
                return [ oldPos[0]-SIZE_OF_SPRITE, oldPos[1] ]
            case 'East':
                return [ oldPos[0]+SIZE_OF_SPRITE, oldPos[1] ]
            case 'North':
                return [ oldPos[0], oldPos[1] -SIZE_OF_SPRITE ]
            case 'South':
                return [ oldPos[0], oldPos[1] +SIZE_OF_SPRITE ]
        }
        
    }
    
    
    
    function dispatchMove(direction){

        store.dispatch({
            type:'MOVE_PLAYER',
            
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


    // Listening to user key downstrokes
    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })


    return player
}