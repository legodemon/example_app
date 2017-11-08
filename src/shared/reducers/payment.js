import * as Constants from '../constants'

const initialState = {
    available: ['cards', 'yamoney', 'paypal', 'webmoney', 'sms', 'qiwi', 'giftnumber'],
    id: null,
    gift: false
};

export default function payment(state = initialState, {type, payload}) {
    switch (type) {
        case Constants.SET_PAYMENT:
            return {...state, id: payload};
        case Constants.SET_GIFT:
            let available;
            if(payload) {
                available = state.available.slice(0, -1);
            } else {
                available = [...state.available, 'giftnumber']
            }
            return {...state, gift: payload, available: available};
        default:
            return state;
    }
}