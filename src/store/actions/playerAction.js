import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const MOVE_PLAYER = "MOVE_PLAYER";
export const MOVE_SUCCESS = "MOVE_SUCCESS";
export const MOVE_ERROR = "MOVE_ERROR";


export const moveAction = (direction) =>{
  // console.log("Dispatch: ", dispatch);
  console.log("Direction: ", direction);
  return dispatch => {

  
 dispatch({ type: MOVE_PLAYER})
 dispatch(
  axiosWithAuth()
    .post(`http://csbuildweek1.herokuapp.com/api/adv/move`, {"direction": direction})
    .then(res => {
      dispatch({ type: MOVE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("Error: ", err.response.data);
      dispatch({ type: MOVE_ERROR, payload: err.response.data });
    })
 )}
};