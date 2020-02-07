import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const LOGGING_IN_CHECK = "LOGGING_IN_CHECK";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT = "LOGOUT";
export const CLEAR_ACTION_LOG = "CLEAR_ACTION_LOG";

// dispatch action here for login
export const login = user => {
    return dispatch => {

    dispatch({type: LOGGING_IN_CHECK});
    axios
    .post(`http://csbuildweek1.herokuapp.com/api/login/`, user)
    .then(res => {
        dispatch({type: LOGIN_SUCCESS});
        console.log('LOGIN RESPONSE', res)
        localStorage.setItem("token", res.data.key);
        return true;
    })
    .catch(err => {
        console.log("Error: ", err);
        dispatch({type:LOGIN_ERROR, payload:err.data})
    })
}
}

export const logout = (dispatch) => {
    localStorage.removeItem('token')
    dispatch({type: LOGOUT})
}


// dispatch action here for logout