import * as Constants from '../constants'

const initialState = {
    available: [
        {
            id: 'two',
            period: '2 года',
            priceTotal: 2880,
            priceMonth: 120,
            classNameMod: 'twoyear'
        },
        {
            id: 'one',
            period: '1 год',
            priceTotal: 1580,
            priceMonth: 125,
            classNameMod: 'oneyear'
        },
        {
            id: 'half',
            period: '6 месяцев',
            priceTotal: 780,
            priceMonth: 130,
            classNameMod: 'halfyear'
        }
    ],
    id: null,
    autoEstimate: false
};

export default function time(state = initialState, {type, payload}) {
    switch (type) {
        case Constants.SET_TIME:
            return {...state, id: payload};
        default:
            return state;

    }
}