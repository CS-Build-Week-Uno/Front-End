import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const GET_LOCATION = "GET_LOCATION";
export const LOCATION_ERR = "LOCATION_ERR";
export const LOCATION_SUC = "LOCATION_SUC";


export const getLocation = dispatch => {
    dispatch({ type: GET_LOCATION});
    axiosWithAuth()
    .get("http://csbuildweek1.herokuapp.com/api/adv/init")
    .then(response => {
        console.log("getLocationResponse: ", response);
        dispatch({type: LOCATION_SUC, payload: response.data});
    })
    .catch(error => {
        console.log("getLocationError: ", error);
        dispatch({type: LOCATION_ERR, payload: error.response.data})
    });
};