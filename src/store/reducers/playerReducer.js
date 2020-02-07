const initialState = {
  position: [0, 0],

}


const playerReducer = (state = initialState, action) => {
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

// +++++++++++++++++++++++++++++++++ Bad+++++++++++++++++++



// import initialState from './initialState'
// const initialState = {
//   // direction: 'S',
//   // alive: true,
//   position: [0, 0]
// };

// const playerReducer = (state = initialState.gameState, action) => {
//   // console.log("playerReducer:  State: ", state, " action: ", action);
//   switch (action.type) {
//     case "MOVE_PLAYER":
//       // console.log("Move Player Payload: ", action.payload);
//       return {
//         ...state,
//         isLoading: true
//       };

//     case "MOVE_SUCCESS":
//       return {
//         ...state,
//         isLoading: false,
//         title: action.payload.title,
//         description: action.payload.description,
//         players: action.payload.players,
//         error_msg: action.payload.error_msg
//         // actionLog:
//         //   action.payload.description !==
//         //   state.actionLog[state.actionLog.length - 1].description
//         //     ? [
//         //         ...state.actionLog,
//         //         {
//         //           title: action.payload.title,
//         //           description: action.payload.description
//         //         }
//         //       ]
//         //     : state.responseLog
//       };
//     case "MOVE_ERROR":
//       return {
//         ...state,
//         isLoading: false,
//         error_msg: action.payload
//         // actionLog: [
//         //   ...state.actionLog,
//         //   {
//         //     title: action.payload.title,
//         //     description: action.payload.description
//         //   }
//         // ]
//       };

//     default:
//       return state;
//   }
// };

// export default playerReducer;
