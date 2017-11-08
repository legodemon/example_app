import * as Constants from '../constants'

export const setTime = timeId => dispatch => {
    dispatch({
        type: Constants.SET_TIME,
        payload: null
    });

    window.setTimeout(() => dispatch({
        type: Constants.SET_TIME,
        payload: timeId
    }), 500)
};