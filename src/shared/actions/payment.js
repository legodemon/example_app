import * as Constants from '../constants'

export const setPayment = paymentId => dispatch => {
    dispatch({
        type: Constants.SET_PAYMENT,
        payload: null
    });

    window.setTimeout(() => dispatch({
        type: Constants.SET_PAYMENT,
        payload: paymentId
    }), 500)
};

export const setGift = gift => dispatch => dispatch({
    type: Constants.SET_GIFT,
    payload: gift
});
