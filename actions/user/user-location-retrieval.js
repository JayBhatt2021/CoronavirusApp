import {fetchGoogleData} from '../../constants/api';
import {getUserLocationData} from "../../selectors/user/user-location-retrieval";

const REQUEST_USER_LOCATION = 'REQUEST_USER_LOCATION';
const requestUserLocation = () => {
    return {
        type: REQUEST_USER_LOCATION
    }
};

const RECEIVE_USER_LOCATION_SUCCESS = 'RECEIVE_USER_LOCATION_SUCCESS';
const receiveUserLocationSuccess = data => {
    return {
        type: RECEIVE_USER_LOCATION_SUCCESS,
        payload: data
    }
};

const RECEIVE_USER_LOCATION_ERROR = 'RECEIVE_USER_LOCATION_ERROR';
const receiveUserLocationError = error => {
    return {
        type: RECEIVE_USER_LOCATION_ERROR,
        payload: error
    }
};

function fetchUserLocation() {
    return async dispatch => {

        const route = '';

        const params = {};

        dispatch(requestUserLocation());
        return await fetchGoogleData(route, params)
            .then(res => res.results)
            .then(res => dispatch(receiveUserLocationSuccess(res)))
            .catch(res => dispatch(receiveUserLocationError(res)))
    }
}

export {
    REQUEST_USER_LOCATION,
    requestUserLocation,
    RECEIVE_USER_LOCATION_SUCCESS,
    receiveUserLocationSuccess,
    RECEIVE_USER_LOCATION_ERROR,
    receiveUserLocationError,
    fetchUserLocation
}