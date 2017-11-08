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
            return {
                ...state,
                gift: payload,
                available: payload ? state.available.slice(0, -1) : [...state.available, 'giftnumber']
            };
        default:
            return state;
    }
}