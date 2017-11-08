import React, {Component} from 'react';
import {uniqueId as uid} from 'lodash';
import Checkbox from '../../components/checkbox/checkbox'
import TimeCase from './components/timecase';
import './time.scss'

export default class Time extends Component {

    data = [
        {
            period: '2 года',
            priceTotal: 2880,
            priceMonth: 120,
            classNameMod: 'twoyear'
        },
        {
            period: '1 год',
            priceTotal: 1580,
            priceMonth: 125,
            classNameMod: 'oneyear'
        },
        {
            period: '6 месяцев',
            priceTotal: 780,
            priceMonth: 130,
            classNameMod: 'halfyear'
        }
    ];

    render = () => {

        const {time: {available, id}, setTime} = this.props;

        return [

            <div key={uid('time')} className='time-cases'>
                {
                    available.map(({ids, period, priceTotal, priceMonth, classNameMod}) =>
                        <TimeCase key={uid('time-case')}
                                  period={period}
                                  priceTotal={priceTotal}
                                  priceMonth={priceMonth}
                                  classNameMod={classNameMod}
                                  handler={id !== ids ? () => setTime(ids) : () => ({})}/>
                    )
                }
            </div>,

            <div key={uid('time')} className='time__comment'>
                В конце срока подписка продлится автоматически. Вы можете выключить автопродление в любой момент в
                настройках или отменить его.
            </div>,

            <Checkbox key={uid('time')} title='Продлевать подписку автоматически'
                      comment='Оплачивая подписку, я принимаю условия оплаты, указанные в оферте и условия автоматического продления подписки на месяц вперёд'/>,

        ]

    }

}