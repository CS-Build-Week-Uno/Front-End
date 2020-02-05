import axios from 'axios';

export const LOGGING_IN_CHECK = "LOGGING_IN_CHECK";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT = "LOGOUT";
export const CLEAR_ACTION_LOG = "CLEAR_ACTION_LOG";

// dispatch action here for login
export const login = (dispatch, user) => {
    dispatch({type: LOGGING_IN_CHECK});
    return axios
    .post(`http://csbuildweek1.herokuapp.com/api/login`, user)
    .then(res => {
        dispatch({type: LOGIN_SUCCESS});
        localStorage.setItem("token", /*WHERE EVER THE TOKEN LOCATION IS */);
        return true;
    })
    .catch(err => {
        console.log("Error: ", err.response);
        dispatch({type:LOGIN_ERROR, payload:err.response.data})
    })
}

export const logout = (dispatch) => {
    localStorage.removeItem('token')
    dispatch({type: LOGOUT})



// dispatch action here for logout