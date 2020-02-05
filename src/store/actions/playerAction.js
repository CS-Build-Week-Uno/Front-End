import axios from "axios";

export const MOVE_PLAYER = "MOVE_PLAYER";
export const MOVE_SUCCESS = "MOVE_SUCCESS";
export const MOVE_ERROR = "MOVE_ERROR";

export const move = (dispatch, direction) => {
  dispatch({ type: MOVE_PLAYER, payload: direction });
  axios
    .post(`http://csbuildweek1.herokuapp.com/api/adv/move`, direction)
    .then(res => {
      dispatch({ type: MOVE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("Error: ", err.response.data);
      dispatch({ type: MOVE_ERROR, payload: err.response.data });
    });
};
//Problem: We need to send a post call to move on the back end
