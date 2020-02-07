
const initialState = {
    // direction: 'S',
    // alive: true,
    position: [0, 0],

}


const playerReducer = (state = initialState, action) => {
    console.log("playerReducer:  State: ", state, " action: ", action);
    switch(action.type) {
        case 'MOVE_PLAYER':
            return{
                ...action.payload
            }
        default:
            return state
    }
}

export default playerReducer