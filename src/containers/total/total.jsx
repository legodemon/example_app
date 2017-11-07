import React, {Component} from 'react'
import Checkbox from '../../components/checkbox/checkbox'
import {uniqueId as uid} from 'lodash';
import './total.scss'

export default class Total extends Component {

    render = () => {
        return [
            <div key={uid('total')} className='total__price total__price_additional'>
                <div className='total__price-main'>1500 + 150</div>
                <div className='total__price-sum'>&nbsp;=&nbsp;1650</div>
                <div className='total__price-unit'>руб.</div>
            </div>,

            <div key={uid('total')} className='total__estimate'>Далее 120 руб. в месяц</div>,

            <Checkbox key={uid('total')} title='Добавить подписку на скидку 5% на весь ассортимент товаров'
                      comment='Срок действия подписки 6 месяцев. Стоимость подписки 150руб.'/>
        ]
    }

}