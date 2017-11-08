import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../components/checkbox/checkbox'
import Element from './components/element';
import {uniqueId as uid} from 'lodash';
import './payments.scss'

export default class Payments extends Component {

    render = () => {
        const {payment: {available, id, gift}, setPayment, setGift} = this.props;

        const checkboxEl = id !== 'giftnumber' ? <Checkbox key={uid('payments')}
                                                           value={gift}
                                                           handler={() => setGift(!gift)}
                                                           title='Покупаю подписку в подарок'
                                                           className='payments-gift'/> : null;

        return [
            <div key={uid('payments')} className='payments-systems'>
                {available.map(item =>
                    <Element key={uid('payments-element')}
                             selected={id === item}
                             classNameMod={item}
                             handler={id !== item ? () => setPayment(item) : () => ({})}/>)}
            </div>,

            checkboxEl
        ]
    }

}