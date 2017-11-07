import React, {Component} from 'react';
import Checkbox from '../../components/checkbox/checkbox'
import Element from './components/element';
import {uniqueId as uid} from 'lodash';
import './payments.scss'

export default class Payments extends Component {

    render = () => {
        return [
            <div key={uid('payments')} className='payments-systems'>
                {
                    ['cards', 'yamoney', 'paypal', 'webmoney', 'sms', 'qiwi', 'giftnumber']
                        .map(item => <Element key={uid('payments-element')} classNameMod={item}/>)
                }

            </div>,

            <Checkbox key={uid('payments')} title='Покупаю подписку в подарок' className='payments-gift'/>,
        ]
    }

}